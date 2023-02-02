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
    <FormGroup className="mb-3">
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
        error={props?.errors[props?.name]}
        helperText={props?.errors[props?.name]?.message?.toString()}
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
    </FormGroup>
  );
};

export default InputSelectField;
