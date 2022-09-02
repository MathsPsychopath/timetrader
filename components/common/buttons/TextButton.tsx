import { chakra, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  children: React.ReactNode;
  icon: React.ReactElement;
  onClick: VoidFunction;
};

export default function TextButton({ children, icon, onClick }: Props) {
  return (
    <Link onClick={onClick} py="2">
      <Flex direction="column" alignItems="center">
        <chakra.span fontSize="2xl">{icon}</chakra.span>
        <Text fontSize="sm">{children}</Text>
      </Flex>
    </Link>
  );
}
