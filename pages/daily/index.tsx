import { chakra } from "@chakra-ui/react";
import next, { NextPage } from "next";
import NavBar from "../../components/common/NavBar/NavBar";

const Daily: NextPage = () => {
  return (
    <chakra.div overflow="scroll">
      <NavBar>
        <p>Hello</p>
      </NavBar>
    </chakra.div>
  );
};
export default Daily;
