import React, { ChangeEvent } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface CustomInputPropsInterface {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  id,
  name,
  placeholder,
  label,
  type = "text",
  onChange,
}: CustomInputPropsInterface) => {
  return (
    <FormControl mb={4}>
      <FormLabel htmlFor={id} color="midnightBlue">
        {label}
      </FormLabel>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        borderColor="gray"
        focusBorderColor="midnightBlue"
        onChange={onChange}
      />
    </FormControl>
  );
};

export default CustomInput;
