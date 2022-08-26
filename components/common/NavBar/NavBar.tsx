import { Flex } from "@chakra-ui/react";
import React from "react";
import useWindowBreakpoint from "../../../hooks/useWindowBreakpoint/useWindowBreakpoint";
import LargeNav from "./deps/LargeNav";
import SmallNav from "./deps/SmallNav";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const isSmall = useWindowBreakpoint(640);
  return (
    <Flex direction={isSmall ? "column" : "row"}>
      {isSmall ? <SmallNav /> : <LargeNav />}
      {children}
    </Flex>
  );
}
