import React, { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const Dropdown = ({ options = [{value:""}], handleChange = () => {} }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const selectedOption = event.target.value;
    setValue(selectedOption);
    handleChange(selectedOption);
  };

  return (
    <FormControl className="w-40">
      <InputLabel id="demo-simple-select-label">Select an option</InputLabel>
      <Select
        id="demo-simple-select"
        labelId="demo-simple-select-label"
        value={value}
        onChange={onChange}
        label="Select an option"
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        {options.map((item) => (
          <MenuItem value={item?.value}>{item?.value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
