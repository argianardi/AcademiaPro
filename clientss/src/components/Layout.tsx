import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Box as="main" p={4} minHeight="80vh">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
