import { chakra, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  icon: React.ReactElement;
};

export default function TextButton({ children, icon }: Props) {
  return (
    <Link py="2">
      <Flex direction="column" alignItems="center">
        <chakra.span fontSize="2xl">{icon}</chakra.span>
        <Text fontSize="sm">{children}</Text>
      </Flex>
    </Link>
  );
}
