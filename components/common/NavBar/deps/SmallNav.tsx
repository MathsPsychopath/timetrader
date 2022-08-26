import {
  Box,
  Flex,
  chakra,
  useColorModeValue,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import colors from "../../../../themes/colors";
import ModalButtons from "./ModalButtons";
import { NavHead } from "./NavHead";

function Head({ bg }: { bg: string }) {
  return (
    <Flex direction="row" bg={bg} py="3" px="1" w="full">
      <NavHead isExpanded />
      <Spacer />
      <HStack mr="4">
        <chakra.button fontSize="3xl">
          <AiOutlineSetting />
        </chakra.button>
        <chakra.button fontSize="3xl">
          <BiLogOut />
        </chakra.button>
      </HStack>
    </Flex>
  );
}

// function Foot({ bg }: { bg: string }) {
//   return (
//     <Box position="absolute" bg={bg} bottom="0">
//       p
//     </Box>
//   );
// }

export default function SmallNav() {
  const bg = useColorModeValue(colors.WHITE, colors.DARK.HEADER);
  return (
    <Box h="full" position="relative">
      <Head bg={bg} />
      {/* <Foot bg={bg} /> */}
    </Box>
  );
}
