// src/pages/RegisterPage.tsx
import React, { useState } from "react";
import { Box, Button, Input, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios"; // Pastikan axios terinstal untuk melakukan request

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/register", {
        username,
        email,
        password,
        role: "Admin",
      });
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

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
          Register as Admin
        </Heading>
        <VStack spacing={4}>
          <Input
            placeholder="Username"
            borderColor="gray"
            focusBorderColor="midnightBlue"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            borderColor="gray"
            focusBorderColor="midnightBlue"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            borderColor="gray"
            focusBorderColor="midnightBlue"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            bg="midnightBlue"
            color="#FFFFFF"
            width="full"
            onClick={handleRegister}
            _hover={{ bg: "darkBlue" }}
          >
            Register
          </Button>
          <Text fontSize="sm" color="gray">
            Already have an account?{" "}
            <a href="/login" style={{ color: "midnightBlue" }}>
              Login here.
            </a>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterPage;
