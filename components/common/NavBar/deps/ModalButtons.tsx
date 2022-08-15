import { chakra, theme, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { BiLogOut } from "react-icons/bi";
import colors from "../../../../themes/colors";
import MenuElement from "./MenuElement";

type Props = {
  icon: IconType;
  showLabel: boolean;
  label: string;
};

export default function ModalButtons({ icon, showLabel, label }: Props) {
  const theme = useColorModeValue(colors.LIGHT, colors.DARK);
  return (
    <chakra.button
      aria-label="Log out"
      display="block"
      w="full"
      roundedLeft="xl"
      _hover={{ bg: theme.ACTIVE, color: colors.WHITE }}
    >
      <MenuElement icon={icon} showLabel={showLabel}>
        {label}
      </MenuElement>
    </chakra.button>
  );
}
