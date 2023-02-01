import React from "react";
import { MODAL_TYPE } from "utils/enums";
import { useStyles } from "components/inputModal/styles";
import { Box, Button } from "@mui/material";

interface IFormButtonProps {
  handleClose: () => void;
  mode: MODAL_TYPE;
  onSubmit: (e: any) => void;
}

const FormButtonGroup: React.FC<IFormButtonProps> = (props) => {
  // const classes = useStyles();

  return (
    <Box
    // className={classes.inputFormBtnGroup}
    >
      <Button
        variant="outlined"
        // className={classes.inputFormBtnGroup}
        onClick={() => props.handleClose()}
      >
        Close
      </Button>
      <Button
        variant="contained"
        // className={classes.inputFormBtnGroup}
        // type="submit"
        onClick={props.onSubmit}
      >
        {props?.mode}
      </Button>
    </Box>
  );
};

export default FormButtonGroup;
