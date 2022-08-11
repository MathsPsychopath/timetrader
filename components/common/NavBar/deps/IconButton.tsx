import React from "react";
import {
  chakra,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TextProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = PositionProps &
  SpaceProps & {
    Icon: IconType;
    setClicked: React.Dispatch<React.SetStateAction<boolean>>;
    clicked: boolean;
    label: string;
    buttonId: string;
    fontSize: string;
  };

export const IconButton: React.FC<Props> = ({
  Icon,
  setClicked,
  clicked,
  buttonId,
  label,
  fontSize,
  ...props
}) => {
  return (
    <chakra.button
      onClick={() => setClicked(!clicked)}
      fontSize={fontSize}
      id={buttonId}
      aria-label={label}
      aria-pressed={clicked}
      position="absolute"
      {...props}
    >
      <Icon aria-hidden />
    </chakra.button>
  );
};
