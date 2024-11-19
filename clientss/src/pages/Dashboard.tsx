import {
  Heading,
  SimpleGrid,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  Box,
  Flex,
  Progress,
} from "@chakra-ui/react";
import { FaUserGraduate, FaUsers, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const statsData = [
    { label: "Students", value: 120, icon: FaUserGraduate },
    { label: "Classes", value: 10, icon: FaClipboardList },
    { label: "Teachers", value: 8, icon: FaUsers },
  ];

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6} color="darkBlue">
        Dashboard
      </Heading>
      <Text fontSize="lg" mb={4} color="gray">
        Welcome to the Admin Dashboard. Here you can manage students, classes,
        and teachers.
      </Text>

      <Box mt={8} p={4} bg="white" borderRadius="md" boxShadow="md">
        <Heading as="h3" size="lg" mb={4} color="darkBlue">
          Data Overview
        </Heading>
        {statsData.map((stat) => (
          <Box key={stat.label} mb={4}>
            <Text fontWeight="bold" color="midnightBlue">
              {stat.label}
            </Text>
            <Progress value={stat.value} max={150} colorScheme="blue" />
          </Box>
        ))}
      </Box>

      <SimpleGrid mt={8} columns={{ base: 1, md: 2 }} spacing={6}>
        {statsData.map((stat) => (
          <Stat
            as={Link}
            to={`/manage-${stat.label.toLowerCase()}`}
            cursor={"pointer"}
            key={stat.label}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p={4}
            transition="all 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <StatLabel fontSize="lg" color="midnightBlue" fontWeight={"bold"}>
              {stat.label}
            </StatLabel>
            <Flex alignItems={"center"} gap={2}>
              <stat.icon color="darkBlue" size={25} />
              <StatNumber mt={2} fontSize="2xl" color="darkBlue">
                {stat.value}
              </StatNumber>
            </Flex>
          </Stat>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
