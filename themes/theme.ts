import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import Link from "./components/Link";
import Heading from "./components/Heading";
import Text from "./components/Text";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const sizes = {
  window: "100vh",
};

const components = {
  Link,
  Heading,
  Text,
};

const theme = extendTheme({
  sizes,
  config,
  components,
});

export default theme;
