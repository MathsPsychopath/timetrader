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
import MenuElement from "./MenuElement";

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
        aria-label={label}
      >
        <MenuElement icon={icon} showLabel={showLabel}>
          {label}
        </MenuElement>
      </Link>
    </ListItem>
  );
}
