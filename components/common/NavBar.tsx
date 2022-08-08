import React, { useEffect, useState } from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import { useWindowWidth } from "@react-hook/window-size";

import { Flex, List } from "@chakra-ui/react";
import { MdHome, MdLeaderboard, MdMenu } from "react-icons/md";
import { BiCalendarCheck, BiCalendarExclamation } from "react-icons/bi";
import { FaBalanceScaleRight } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";

import MenuItem from "./MenuItem";
import colors from "../../themes/colors";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isExpanded, setExpanded] = useState<boolean>(true);
  const width = useWindowWidth();
  const bgMenu = useColorModeValue(colors.WHITE, colors.DARK.HEADER);
  const bgSecondary = useColorModeValue(colors.GREY, colors.BLACK_50);

  return (
    <nav>
      <Flex
        as={motion.div}
        minW={isExpanded ? "200px" : "70px"}
        maxW={isExpanded ? "300px" : "70px"}
        initial={{ width: "8%" }}
        animate={{ width: "30%" }}
        exit={{ width: "8%" }}
        // w={isExpanded ? "30%" : "8%"}
        transition="0.5s linear"
        bgColor={bgMenu}
        direction="column"
        h="window"
        position="sticky"
        alignItems="center"
        p="2"
      >
        <chakra.button
          onClick={() => setExpanded(!isExpanded)}
          fontSize="4xl"
          id="menu-toggle"
          aria-label="toggle menu"
          aria-pressed={isExpanded}
        >
          <MdMenu aria-hidden="true" />
        </chakra.button>
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
