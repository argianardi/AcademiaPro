import { useState } from "react";
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
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableContainer,
  TableCaption,
  useDisclosure,
  DrawerOverlay,
  Select,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaEdit, FaTrash } from "react-icons/fa";
import CustomInput from "../components/CustomInput";

const Teachers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Dummy data for the teacher list
  const [teachers, setTeachers] = useState([
    {
      name: "Mr. Smith",
      email: "smith@example.com",
      phone: "123-456-7890",
      class: "Mathematics",
    },
    {
      name: "Mrs. Johnson",
      email: "johnson@example.com",
      phone: "098-765-4321",
      class: "Science",
    },
  ]);

  // State for form data
  const [formData, setFormData] = useState({
    index: null,
    name: "",
    email: "",
    phone: "",
    class: "",
  });

  const handleSubmit = () => {
    if (formData.index !== null) {
      const updatedTeachers = [...teachers];
      updatedTeachers[formData.index] = formData;
      setTeachers(updatedTeachers);
    } else {
      setTeachers([...teachers, formData]);
    }

    setFormData({ index: null, name: "", email: "", phone: "", class: "" });
    onClose();
  };

  return (
    <Box p={4}>
      <Button
        leftIcon={<AddIcon />}
        bg="midnightBlue"
        color="#FFFFFF"
        _hover={{ bg: "darkBlue" }}
        onClick={onOpen}
        mb={4}
        w={"fit-content"}
        px={"20px"}
      >
        Add Teacher
      </Button>

      <TableContainer>
        <Table variant="simple">
          <TableCaption>List of Teachers</TableCaption>
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
            {teachers.map((teacher, index) => (
              <Tr key={index}>
                <Td>{teacher.name}</Td>
                <Td>{teacher.email}</Td>
                <Td>{teacher.phone}</Td>
                <Td>{teacher.class}</Td>
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
                    // onClick={() => handleDelete(index)}
                    variant="outline"
                    size={"sm"}
                  >
                    <FaTrash />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Drawer for Adding/Editing Teacher */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton color="darkBlue" />
          <DrawerHeader borderBottomWidth="1px" color="darkBlue">
            {formData.index !== null ? "Edit Teacher" : "Add New Teacher"}
          </DrawerHeader>

          <DrawerBody>
            <CustomInput
              id="name"
              name="name"
              placeholder="Enter teacher name"
              label="Name"
              onChange={(e) => console.log(e.target.value)}
            />

            <CustomInput
              id="email"
              name="email"
              type="email"
              placeholder="Enter teacher email"
              label="Email"
              onChange={(e) => console.log(e.target.value)}
            />

            <CustomInput
              id="phone"
              name="phone"
              placeholder="Enter teacher phone number"
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
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              {formData.index !== null ? "Update" : "Submit"}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Teachers;
