import { ComponentStyleConfig } from "@chakra-ui/react";

const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "600",
    fontFamily: "montserrat",
  },
  variants: {
    "heading-1": { fontSize: "2em" },
    "heading-2": { fontSize: "1.875em" },
    "heading-3": { fontSize: "1.75em" },
    "heading-4": { fontSize: "1.625em" },
    "heading-5": { fontSize: "1.5em" },
    "heading-6": { fontSize: "1.375em" },
    "heading-7": { fontSize: "1.25em" },
    "heading-8": { fontSize: "1.125em" },
  },
};

export default Heading;
