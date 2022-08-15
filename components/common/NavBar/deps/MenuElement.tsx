import { HStack, ListIcon, Text, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  showLabel: boolean;
  children: React.ReactNode;
};

export default function MenuElement({ icon, showLabel, children }: Props) {
  return (
    <Flex paddingLeft="4" h="12">
      <HStack>
        <ListIcon as={icon} w="25px" h="25px" aria-hidden />
        <AnimatePresence>
          {showLabel && (
            <Text
              whiteSpace="nowrap"
              as={motion.p}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -25, opacity: 0 }}
            >
              {children}
            </Text>
          )}
        </AnimatePresence>
      </HStack>
    </Flex>
  );
}
