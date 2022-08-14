import { Icon, Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import colors from "../../../../themes/colors";

export const NavHead: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
  const color = useColorModeValue(colors.BLACK_TEXT, colors.WHITE);
  return (
    <AnimatePresence>
      {isExpanded && (
        <Flex
          as={motion.div}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
        >
          <Icon viewBox="0 0 512 512" w="8" h="8">
            <path
              d="M247.75 484H163.875V163.931L80 240.138L202 42L324 240.138L247.75 163.931V484Z"
              fill="#3BB900"
              stroke="black"
              strokeWidth="11"
            />
            <path
              d="M369 484H278V240L323.5 285.75L369 240V484Z"
              fill="#F04541"
              stroke="black"
              strokeWidth="11"
            />
          </Icon>
          <Heading variant="heading-3" color={color}>
            TimeTrader
          </Heading>
        </Flex>
      )}
    </AnimatePresence>
  );
};
