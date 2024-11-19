import React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Menu items
  const menuItems = [
    { name: "Dashboard", icon: FaTachometerAlt, path: "/" },
    {
      name: "Classes",
      icon: FaChalkboardTeacher,
      path: "/manage-classes",
    },
    { name: "Students", icon: FaUserGraduate, path: "/manage-students" },
    { name: "Teachers", icon: FaUsers, path: "/manage-teachers" },
    { name: "Logout", icon: FaSignOutAlt, path: "/logout" },
  ];

  return (
    <Box
      position={"sticky"}
      top={0}
      bg="darkBlue"
      color="white"
      p={4}
      boxShadow="md"
      zIndex={999}
    >
      <Flex justify="space-between" align="center" alignItems={"center"}>
        <Text
          as={RouterLink}
          to="/"
          color={"linen"}
          cursor={"pointer"}
          fontSize="xl"
          fontWeight="bold"
        >
          AcademiaPro
        </Text>
        <Box
          as={BiMenuAltRight}
          aria-label="Open Menu"
          onClick={onOpen}
          w={"40px"}
          h={"40px"}
          cursor={"pointer"}
          display={{ base: "block", md: "none" }}
        />

        {/* Desktop Menu */}
        <Flex display={{ base: "none", md: "flex" }} justify="space-around">
          {menuItems.map(({ name, icon, path }) => (
            <Link
              key={name}
              as={RouterLink}
              to={path}
              p={4}
              display={"flex"}
              alignItems={"center"}
              _hover={{
                bg: "midnightBlue",
                borderRadius: "md",
                transform: "scale(1.05)",
                transition: "transform 0.2s",
              }}
            >
              {React.createElement(icon)}
              <Text ml={2}>{name}</Text>
            </Link>
          ))}
        </Flex>
      </Flex>

      {/* Drawer for Mobile Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {menuItems.map(({ name, icon, path }) => (
                <Link
                  key={name}
                  as={RouterLink}
                  onClick={onClose}
                  to={path}
                  display="flex"
                  alignItems="center"
                  _hover={{ textDecoration: "underline", color: "brightRed" }}
                >
                  {React.createElement(icon, { style: { marginRight: "8px" } })}
                  {name}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
