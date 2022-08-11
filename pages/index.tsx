import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/common/NavBar/NavBar";
import { chakra } from "@chakra-ui/react";
import ColorModeSwitch from "../components/common/ColorModeSwitch";

const Home: NextPage = () => {
  return (
    <chakra.div position="relative">
      <Head>
        <title>TimeTrader</title>
        <meta
          name="description"
          content="Higher or Lower, but with stock time periods."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorModeSwitch />
      <NavBar />
    </chakra.div>
  );
};

export default Home;
