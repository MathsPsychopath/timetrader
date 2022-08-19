import React, { useState } from "react";
import useWindowBreakpoint from "../../../hooks/useWindowBreakpoint/useWindowBreakpoint";
import LargeNav from "./deps/LargeNav";
import SmallNav from "./deps/SmallNav";

export default function NavBar() {
  const isSmall = useWindowBreakpoint(640);
  if (isSmall) return <SmallNav />;
  return <LargeNav />;
}
