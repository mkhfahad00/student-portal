// import React from "react";
// import { Form } from "react-bootstrap";
import { FormGroup, FormLabel, TextField, MenuItem } from "@mui/material";

interface ISelectField {
  errors: any;
  fieldLabel: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  data: string[];
}
const InputSelectField: React.FC<ISelectField> = (props) => {
  return (
    <FormGroup
      className="mb-3"
      // control={props.name}
    >
      <FormLabel>{props.fieldLabel}</FormLabel>
      <TextField
        style={{ marginTop: 20 }}
        label={`Choose ${props.fieldLabel}`}
        fullWidth
        select
        variant="outlined"
        value={props?.value}
        id={props.fieldLabel}
        margin="dense"
        helperText={`Please select ${props.fieldLabel}`}
        // error={props.errors[props.name]}
        onChange={props.onChange}
      >
        {props?.data?.map((sub, key) => {
          return (
            <MenuItem key={key} value={sub}>
              {sub}
            </MenuItem>
          );
        })}
      </TextField>
      {/* {props.errors[props.name] && (
        <FormControlLabel className="text-danger">
          {props.errors[props.name].message?.toString()}
        </FormControlLabel>
      )} */}
    </FormGroup>
  );
};

export default InputSelectField;

{
  /* <Form.Group className="mb-3" controlId={props.name}>
<Form.Label>{props.fieldLabel}</Form.Label>
<Form.Select
  aria-label={`Select ${props.fieldLabel}`}
  onChange={props.onChange}
  value={props.value}
>
  <option>{`Choose ${props.fieldLabel}`}</option>
  {props?.data?.map((sub, key) => {
    return (
      <option key={key} value={sub}>
        {sub}
      </option>
    );
  })}
</Form.Select>
{props.errors[props.name] && (
  <Form.Text className="text-danger">
    {props.errors[props.name].message?.toString()}
  </Form.Text>
)}
</Form.Group> */
}
