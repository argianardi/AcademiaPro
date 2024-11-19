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
  useDisclosure,
  DrawerOverlay,
  Select,
} from "@chakra-ui/react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import CustomInput from "../components/CustomInput";

const Classes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Dummy data for the class list
  const [classes, setClasses] = useState([
    {
      name: "10A",
      studentsCount: 25,
      teacher: "Mr. Smith",
      description: "Mathematics class",
    },
    {
      name: "10B",
      studentsCount: 20,
      teacher: "Mrs. Johnson",
      description: "Science class",
    },
  ]);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    studentsCount: 0,
    teacher: "",
    description: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "studentsCount") {
      setFormData({ ...formData, [name]: parseInt(value, 10) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    setClasses([...classes, formData]);
    setFormData({ name: "", studentsCount: 0, teacher: "", description: "" });
    onClose();
  };

  const teachers = [
    { id: "1", name: "Mr. Smith" },
    { id: "2", name: "Mrs. Johnson" },
    { id: "3", name: "Ms. Lee" },
  ];

  return (
    <Box p={4}>
      <Button
        leftIcon={<FaPlus />}
        bg="midnightBlue"
        color="#FFFFFF"
        width="fit-content"
        _hover={{ bg: "darkBlue" }}
        onClick={onOpen}
        px={"20px"}
      >
        Add Class
      </Button>

      {/* Drawer for Adding/Editing Class */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="lightGray">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" color="darkBlue">
            {/* {formData.index !== null ? "Edit Class" : "Add New Class"} */}
            Add New Class
          </DrawerHeader>

          <DrawerBody>
            <CustomInput
              id="name"
              name="name"
              placeholder="Enter class name"
              label="Name"
              // value={formData.name}
              onChange={handleInputChange}
            />

            <CustomInput
              id="description"
              name="description"
              placeholder="Enter class description"
              label="Description"
              // value={formData.description}
              onChange={handleInputChange}
            />

            <FormControl mb={4}>
              <FormLabel htmlFor="teacherId" color="midnightBlue">
                Select Teacher
              </FormLabel>
              <Select
                borderColor="gray"
                focusBorderColor="midnightBlue"
                id="teacherId"
                name="teacherId"
                fontSize={"14px"}
                placeholder="Select a teacher"
                onChange={handleInputChange}
              >
                {teachers.map((teacher) => (
                  <option
                    style={{ fontSize: "12px" }}
                    key={teacher.id}
                    value={teacher.name}
                  >
                    {teacher.name}
                  </option>
                ))}
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

      {/* Table for Class List */}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="midnightBlue">Name</Th>
              <Th color="midnightBlue">Students Count</Th>
              <Th color="midnightBlue">Teacher</Th>
              <Th color="midnightBlue">Description</Th>
              <Th color="midnightBlue">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {classes.map((classItem, index) => (
              <Tr key={index}>
                <Td>{classItem.name}</Td>
                <Td>{classItem.studentsCount}</Td>
                <Td>{classItem.teacher}</Td>
                <Td>{classItem.description}</Td>
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
    </Box>
  );
};

export default Classes;
