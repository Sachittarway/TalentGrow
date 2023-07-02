// import React, { useState } from "react";

import "./Navbar.css";

import {
  Box,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import MainNavbar from "./MainNavbar";

import { IoSearchSharp } from "react-icons/io5";

function Navbar({ url }) {
  if (url == null) {
    url = "https://lh4.googleusercontent.com/1CeAGK_qYXUAy3ED6MiAoTuUwTKjQUH79UeQ7L3Og2hYQm8aRhpzAB70sytIlRFZc9vIU-rzjaCHEVJZOAsT_xIXIRduHzVJWuLZ0jQIPGYkdQiUzpjxW9QxgMGd-FgbBnl_GYRfYApwZOJTng";
  }

  const url1 = {
    backgroundImage: `url(${url})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div style={url1}>
        <MainNavbar />

        <div>
          <Heading
            textAlign={"center"}
            color={"white"}
            my={"2%"}
            display={{ base: "none", md: "block" }}
          >
          </Heading>
        </div>
        <Box
          mx={{
            base: "10%",
            lg: "25%",
          }}
          paddingBottom={"8%"}
        >
          
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
