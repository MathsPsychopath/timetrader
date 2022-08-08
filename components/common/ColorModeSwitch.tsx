import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      position="fixed"
      bottom={0}
      right={0}
      zIndex="overlay"
      bgColor="nav"
      margin="4"
    >
      Switch to {colorMode === "dark" ? "light" : "dark"}
    </Button>
  );
}
