import React, { useState } from "react";
import { chakra, Heading, Spacer, useColorModeValue } from "@chakra-ui/react";
import { useWindowWidth } from "@react-hook/window-size";

import { Flex, List, Text } from "@chakra-ui/react";
import { MdHome, MdLeaderboard, MdMenu } from "react-icons/md";
import { BiCalendarCheck, BiCalendarExclamation } from "react-icons/bi";
import { FaBalanceScaleRight } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";

import MenuItem from "./MenuItem";
import colors from "../../themes/colors";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
  const [isExpanded, setExpanded] = useState<boolean>(true);
  const width = useWindowWidth();
  const bgMenu = useColorModeValue(colors.WHITE, colors.DARK.HEADER);
  const bgSecondary = useColorModeValue(colors.GREY, colors.BLACK_50);

  return (
    <nav>
      <Flex
        maxW={isExpanded ? "300px" : "70px"}
        minW={isExpanded ? "200px" : "70px"}
        as={motion.div}
        bgColor={bgMenu}
        initial={{ width: "70px" }}
        animate={{ width: "30%" }}
        exit={{ width: "70px" }}
        transition="0.5s ease"
        h="window"
        p="2"
        direction="column"
        position="relative"
        alignItems="center"
        boxShadow="2xl"
      >
        <Flex direction="row" alignItems="center">
          <Spacer py="6" />
          <AnimatePresence>
            {isExpanded && (
              <Heading
                variant="heading-3"
                as={motion.h1}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
              >
                TimeTrader
              </Heading>
            )}
          </AnimatePresence>
          <chakra.button
            onClick={() => setExpanded(!isExpanded)}
            fontSize="4xl"
            id="menu-toggle"
            aria-label="toggle menu"
            aria-pressed={isExpanded}
            position="absolute"
            top="4"
            right="4"
          >
            <MdMenu aria-hidden="true" />
          </chakra.button>
        </Flex>
        <List w="full" bg={bgSecondary} ml="3.5" roundedLeft="xl">
          <MenuItem
            showLabel={isExpanded}
            icon={MdHome}
            label="Home"
            href="/home"
          />
          <MenuItem
            showLabel={isExpanded}
            icon={BiCalendarExclamation}
            label="Daily"
            href="/daily"
          />
          {/* BiCalendarCheck */}
          <MenuItem
            showLabel={isExpanded}
            icon={FaBalanceScaleRight}
            label="Overleveraged"
            href="/overld"
          />
          <MenuItem
            showLabel={isExpanded}
            icon={GiPieChart}
            label="Hedge"
            href="/hedge"
          />
          <MenuItem
            showLabel={isExpanded}
            icon={MdLeaderboard}
            label="Rankings"
            href="/ranks"
          />
        </List>
      </Flex>
    </nav>
  );
}
