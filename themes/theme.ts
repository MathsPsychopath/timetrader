import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import Link from "./components/Link";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const sizes = {
  window: "100vh",
};

const components = {
  Link,
};

const theme = extendTheme({
  sizes,
  config,
  components,
});

export default theme;
