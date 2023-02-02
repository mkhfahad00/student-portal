import React from "react";
import {
  FormGroup,
  FormLabel,
  FormControlLabel,
  TextField,
  MenuItem,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { IStudentRaw } from "state/ducks/students/types";

interface ITextField {
  errors: any;
  fieldLabel: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  // placeholder: string;
  type: string;
  // control: any;
}
const InputTextField: React.FC<ITextField> = (props) => {
  return (
    <FormGroup className="mb-3">
      <FormLabel>{props.fieldLabel}</FormLabel>
      <TextField
        style={{ marginTop: 20 }}
        label={`Enter ${props.fieldLabel}`}
        fullWidth
        variant="outlined"
        id={props.fieldLabel}
        value={props.value}
        margin="dense"
        error={props?.errors[props?.name]}
        helperText={props?.errors[props?.name]?.message?.toString()}
        type={props.type}
        onChange={props.onChange}
      ></TextField>
    </FormGroup>
  );
};

export default InputTextField;
