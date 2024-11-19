import React from "react";
import { Box, Button, Input, Heading, Text, VStack } from "@chakra-ui/react";

const LoginPage: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="lightGray"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        width={{ base: "90%", sm: "400px" }}
      >
        <Heading as="h1" size="lg" mb={6} color="darkBlue">
          Login to Your account
        </Heading>
        <VStack spacing={4}>
          <Input
            placeholder="Username"
            borderColor="gray"
            focusBorderColor="midnightBlue"
          />
          <Input
            placeholder="Password"
            type="password"
            borderColor="gray"
            focusBorderColor="midnightBlue"
          />
          <Button
            bg="midnightBlue"
            color="#FFFFFF"
            width="full"
            _hover={{ bg: "darkBlue" }}
          >
            Login
          </Button>

          <Text fontSize="sm" color="gray">
            Don't have an account? Sign up
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginPage;
