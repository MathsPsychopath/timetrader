import { ComponentStyleConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "400",
    fontFamily: "Montserrat, sans-serif",
  },
  variants: {
    "para-1": { fontSize: "64px" },
    "para-2": { fontSize: "48px" },
    "para-3": { fontSize: "40px" },
    "para-4": { fontSize: "36px" },
    "para-5": { fontSize: "32px" },
    "para-6": { fontSize: "24px" },
    "para-7": { fontSize: "16px" },
  },
};

export default Text;
