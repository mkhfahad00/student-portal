import React from "react";
import {
  FormGroup,
  FormLabel,
  FormControlLabel,
  TextField,
  MenuItem,
} from "@mui/material";

interface ITextField {
  errors: any;
  fieldLabel: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder: string;
  type: string;
}
const InputTextField: React.FC<ITextField> = (props) => {
  return (
    <FormGroup
      className="mb-3"
      // controlId={props.name}
    >
      <FormLabel>{props.fieldLabel}</FormLabel>
      <TextField
        style={{ marginTop: 20 }}
        label={`Enter ${props.fieldLabel}`}
        fullWidth
        variant="outlined"
        id={props.fieldLabel}
        value={props.value}
        margin="dense"
        // helperText={`Please Enter ${props.fieldLabel}`}
        helperText={props.placeholder}
        type={props.type}
        onChange={props.onChange}
      ></TextField>
      {/* {props.errors[props.name] && (
      <FormControlLabel className="text-danger">
        {props.errors[props.name].message?.toString()}
      </FormControlLabel>
    )} */}
    </FormGroup>
  );
};

export default InputTextField;

{
  /* <Form.Group className="mb-3" controlId={props.name}>
<Form.Label>{props.fieldLabel}</Form.Label>
<Form.Control
  type={props.type}
  placeholder={props.placeholder}
  onChange={props.onChange}
  value={props.value}
/>
{props.errors[props.name] && (
  <Form.Text className="text-danger">
    {props.errors[props.name].message?.toString()}
  </Form.Text>
)}
</Form.Group> */
}
