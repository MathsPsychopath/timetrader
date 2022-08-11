import React from "react";
import { IconType } from "react-icons";
import {
  Flex,
  HStack,
  Link,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import colors from "../../../../themes/colors";
import { AnimatePresence, motion } from "framer-motion";

type ItemProps = {
  icon: IconType;
  label: string;
  href: string;
  showLabel: boolean;
};

export default function MenuItem({ icon, label, href, showLabel }: ItemProps) {
  const router = useRouter();
  const isHighlighted = router.pathname.includes(href);
  const hoverColor = useColorModeValue(colors.LIGHT.ACTIVE, colors.DARK.ACTIVE);
  return (
    <ListItem>
      <Link
        href={href}
        variant={isHighlighted ? "menu-item-this" : "menu-item-other"}
        display="block"
        roundedLeft="xl"
        _hover={{ bg: hoverColor, color: colors.WHITE }}
      >
        <Flex paddingLeft="4" h="12">
          <HStack>
            <ListIcon as={icon} w="25px" h="25px" />
            <AnimatePresence>
              {showLabel && (
                <Text
                  as={motion.p}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -25, opacity: 0 }}
                >
                  {label}
                </Text>
              )}
            </AnimatePresence>
          </HStack>
        </Flex>
      </Link>
    </ListItem>
  );
}
