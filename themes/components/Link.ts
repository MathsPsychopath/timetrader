import { ComponentStyleConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import colors from "../colors";

const Link: ComponentStyleConfig = {
  variants: {
    "menu-item-other": (props: StyleFunctionProps) => ({
      bg: colors[props.colorMode === "light" ? "GREY" : "BLACK_50"],
      color: colors[props.colorMode === "light" ? "BLACK_TEXT" : "WHITE"],
    }),
    "menu-item-this": (props: StyleFunctionProps) => ({
      bg: colors[props.colorMode === "light" ? "LIGHT" : "DARK"].FOCUSED,
      color: colors.WHITE,
    }),
  },
};

export default Link;
