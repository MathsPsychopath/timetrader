import React, { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

import {
  chakra,
  Flex,
  List,
  Spacer,
  useColorModeValue,
  VStack,
  Box,
} from "@chakra-ui/react";
import { MdHome, MdLeaderboard, MdMenu } from "react-icons/md";
import {
  BiCalendarCheck,
  BiCalendarExclamation,
  BiLogOut,
} from "react-icons/bi";
import { FaBalanceScaleRight } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { AiOutlineSetting } from "react-icons/ai";

import MenuItem from "./deps/MenuItem";
import colors from "../../../themes/colors";
import Image from "next/image";
import { NavHead } from "./deps/NavHead";
import MenuElement from "./deps/MenuElement";

export default function NavBar() {
  const [isExpanded, setExpanded] = useState<boolean>(true);
  const width = useWindowWidth();
  const bgMenu = useColorModeValue(colors.WHITE, colors.DARK.HEADER);
  const bgSecondary = useColorModeValue(colors.GREY, colors.BLACK_50);
  const color = useColorModeValue(colors.BLACK_TEXT, colors.WHITE);
  return (
    <nav>
      <Flex
        maxW={isExpanded ? "300px" : "70px"}
        minW={isExpanded ? "200px" : "70px"}
        w="30%"
        bgColor={bgMenu}
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
          <Box>
            <chakra.button
              onClick={() => setExpanded(!isExpanded)}
              fontSize="4xl"
              position="absolute"
              top="4"
              right="4"
              aria-label="menu toggle"
              aria-pressed={isExpanded}
            >
              <MdMenu aria-hidden color={color} />
            </chakra.button>
          </Box>
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

        <List w="full" bg={bgSecondary} ml="3.5" roundedLeft="xl">
          <chakra.button aria-label="Settings">
            <MenuElement icon={AiOutlineSetting} showLabel={isExpanded}>
              Settings
            </MenuElement>
          </chakra.button>
          <chakra.button aria-label="Log out">
            <MenuElement icon={BiLogOut} showLabel={isExpanded}>
              Log out
            </MenuElement>
          </chakra.button>
        </List>
      </Flex>
    </nav>
  );
}
