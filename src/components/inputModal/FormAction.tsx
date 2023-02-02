import React from "react";
import { MODAL_TYPE } from "utils/enums";
import { useStyles } from "components/inputModal/styles";
import { Box, Button, Grid, Container } from "@mui/material";

interface IFormButtonProps {
  handleClose: () => void;
  mode: MODAL_TYPE;
  onSubmit: (e: any) => void;
}

const FormButtonGroup: React.FC<IFormButtonProps> = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.inputFormBtnGroup}>
      <Button
        variant="outlined"
        className={classes.btnInputCancel}
        size="medium"
        onClick={() => props.handleClose()}
      >
        Close
      </Button>
      <Button
        variant="contained"
        size="medium"
        className={classes.btnInputSuccess}
        onClick={props.onSubmit}
      >
        {props?.mode}
      </Button>
    </Container>
  );
};

export default FormButtonGroup;
