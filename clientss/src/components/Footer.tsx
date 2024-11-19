import { Box, Flex, Text, Link, Stack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="darkBlue" color="white" p={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Text fontSize="lg" fontWeight="bold">
          AcademiaPro
        </Text>
        <Stack direction="row" spacing={4} mt={{ base: 2, md: 0 }}>
          <Link href="/privacy-policy" _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            _hover={{ textDecoration: "underline" }}
          >
            Terms of Service
          </Link>
        </Stack>
        <Stack direction="row" spacing={4} mt={{ base: 2, md: 0 }}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
        </Stack>
      </Flex>
      <Text fontSize="sm" textAlign="center" mt={4}>
        © {new Date().getFullYear()} AcademiaPro. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
