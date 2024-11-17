import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  FormControl,
  FormLabel,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  DrawerOverlay,
  TableContainer,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaEdit, FaTrash } from "react-icons/fa";
import CustomInput from "../components/CustomInput";

const Students = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Dummy data for the student list
  const students = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      class: "10A",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "098-765-4321",
      class: "10B",
    },
  ];

  return (
    <Box p={4}>
      <Button
        leftIcon={<AddIcon />}
        bg="midnightBlue"
        color="#FFFFFF"
        width="full"
        _hover={{ bg: "darkBlue" }}
        w={"fit-content"}
        onClick={onOpen}
        mb={4}
      >
        Add Student
      </Button>

      {/* Drawer for Adding Student */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          {" "}
          <DrawerCloseButton color="darkBlue" />
          <DrawerHeader borderBottomWidth="1px" color="darkBlue">
            Add New Student
          </DrawerHeader>
          <DrawerBody>
            <CustomInput
              id="name"
              name="name"
              placeholder="Enter student name"
              label="Name"
              onChange={(e) => console.log(e.target.value)}
            />

            <CustomInput
              id="email"
              name="email"
              type="email"
              placeholder="Enter student email"
              label="Email"
              onChange={(e) => console.log(e.target.value)}
            />

            <CustomInput
              id="phone"
              name="phone"
              placeholder="Enter student phone number"
              label="Phone"
              onChange={(e) => console.log(e.target.value)}
            />

            <FormControl mb={4}>
              <FormLabel htmlFor="class" color="midnightBlue">
                Select Class
              </FormLabel>
              <Select
                borderColor="gray"
                focusBorderColor="midnightBlue"
                id="class"
              >
                <option value="10A">10A</option>
                <option value="10B">10B</option>
              </Select>
            </FormControl>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button
              variant="outline"
              colorScheme="midnightBlue"
              color={"midnightBlue"}
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              bg="midnightBlue"
              color="#FFFFFF"
              width="full"
              _hover={{ bg: "darkBlue" }}
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Students Table */}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="midnightBlue">Name</Th>
              <Th color="midnightBlue">Email</Th>
              <Th color="midnightBlue">Phone</Th>
              <Th color="midnightBlue">Class</Th>
              <Th color="midnightBlue">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student, index) => (
              <Tr key={index}>
                <Td>{student.name}</Td>
                <Td>{student.email}</Td>
                <Td>{student.phone}</Td>
                <Td>{student.class}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    // onClick={() => handleEdit(index)}
                    mr={2}
                    variant="outline"
                    size={"sm"}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    colorScheme="red"
                    size={"sm"}
                    // onClick={() => handleDelete(index)}
                    variant="outline"
                  >
                    <FaTrash />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Students;
