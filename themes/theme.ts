import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import colors from "./colors";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const sizes = {
  window: "100vh",
};

const theme = extendTheme({ sizes, colors, config });
export default theme;
