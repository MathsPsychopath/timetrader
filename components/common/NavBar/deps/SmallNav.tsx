import {
  Box,
  Flex,
  chakra,
  useColorModeValue,
  Spacer,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCalendarExclamation, BiLogOut } from "react-icons/bi";
import { FaBalanceScaleRight } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { MdHome, MdLeaderboard } from "react-icons/md";
import colors from "../../../../themes/colors";
import TextButton from "../../buttons/TextButton";
import { NavHead } from "./NavHead";

function Head({ bg }: { bg: string }) {
  return (
    <Flex direction="row" bg={bg} py="3" px="1" roundedBottom="lg">
      <NavHead isExpanded ml="4" />
      <Spacer minWidth="4" />
      <HStack mr="4">
        <IconButton
          variant="outline"
          fontSize="3xl"
          aria-label="Open settings"
          icon={<AiOutlineSetting />}
          border="0px"
        />
        <IconButton
          variant="outline"
          fontSize="3xl"
          aria-label="Log Out"
          icon={<BiLogOut />}
          border="0px"
        />
      </HStack>
    </Flex>
  );
}

function Foot({ bg }: { bg: string }) {
  return (
    <Flex
      position="absolute"
      bg={bg}
      bottom="0"
      py="3"
      px="1"
      w="full"
      h="20"
      roundedTop="lg"
    >
      <Spacer />
      <TextButton icon={<MdHome />}>Home</TextButton>
      <Spacer />
      {/* BiCalendarCheck */}
      <TextButton icon={<BiCalendarExclamation />}>Daily</TextButton>
      <Spacer />
      <TextButton icon={<FaBalanceScaleRight />}>Overleveraged</TextButton>
      <Spacer />
      <TextButton icon={<GiPieChart />}>Hedge</TextButton>
      <Spacer />
      <TextButton icon={<MdLeaderboard />}>Rankings</TextButton>
      <Spacer />
    </Flex>
  );
}

export default function SmallNav({ children }: { children: React.ReactNode }) {
  const bg = useColorModeValue(colors.WHITE, colors.DARK.HEADER);
  return (
    <Box h="window" position="relative">
      <Head bg={bg} />
      {children}
      <Foot bg={bg} />
    </Box>
  );
}
