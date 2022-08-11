import React, { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

import {
  Flex,
  List,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MdHome, MdLeaderboard, MdMenu } from "react-icons/md";
import { BiCalendarCheck, BiCalendarExclamation } from "react-icons/bi";
import { FaBalanceScaleRight } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { AiOutlineSetting } from "react-icons/ai";

import MenuItem from "./deps/MenuItem";
import colors from "../../../themes/colors";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { IconButton } from "./deps/IconButton";
import { NavHead } from "./deps/NavHead";

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
          <NavHead isExpanded={isExpanded} />
          <Spacer p="6" />
          <IconButton
            Icon={MdMenu}
            setClicked={setExpanded}
            clicked={isExpanded}
            label="menu toggle"
            buttonId="menu-toggle"
            fontSize="4xl"
            top="4"
            right="4"
          />
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
        {/* <VStack>
          <Image src="/" alt="profile picture" width={30} height={30} />
          <IconButton
            Icon={AiOutlineSetting}
            setClicked={setExpanded}
            clicked={isExpanded}
            label="settings"
            buttonId="settings"
            left="0"
            fontSize="3xl"
            ml="3.5"
            paddingLeft="4"
          />
        </VStack> */}
      </Flex>
    </nav>
  );
}
