import {
  useColorModeValue,
  Flex,
  Spacer,
  chakra,
  List,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { useWindowWidth } from "@react-hook/window-size";
import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCalendarExclamation, BiLogOut } from "react-icons/bi";
import { FaBalanceScaleRight } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { MdMenu, MdHome, MdLeaderboard } from "react-icons/md";
import colors from "../../../../themes/colors";
import ModalButton from "./ModalButton";
import { NavHead } from "./NavHead";
import MenuItem from "./MenuItem";

export default function LargeNav() {
  const [isExpanded, setExpanded] = useState<boolean>(true);
  const width = useWindowWidth();
  const bgMenu = useColorModeValue(colors.WHITE, colors.DARK.HEADER);
  const bgSecondary = useColorModeValue(colors.GREY, colors.BLACK_50);
  const color = useColorModeValue(colors.BLACK_TEXT, colors.WHITE);
  return (
    <nav>
      <Flex
        maxW={isExpanded ? "300px" : "70px"}
        minW={isExpanded ? "275px" : "70px"}
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
          <IconButton
            onClick={() => setExpanded(!isExpanded)}
            fontSize="4xl"
            position="absolute"
            top="4"
            right="4"
            aria-label="menu toggle"
            aria-pressed={isExpanded}
            icon={<MdMenu color={color} />}
            variant="outline"
            border="0px"
          />
        </Flex>
        <List w="full" bg={bgSecondary} ml="3.5" mt="3.5" roundedLeft="xl">
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
        <Spacer />
        <List w="full" bg={bgSecondary} ml="3.5" roundedLeft="xl" mb="4">
          <ModalButton
            icon={AiOutlineSetting}
            showLabel={isExpanded}
            label="Settings"
          />
          <ModalButton icon={BiLogOut} showLabel={isExpanded} label="Log out" />
        </List>
      </Flex>
    </nav>
  );
}
