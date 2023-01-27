import React from "react";
import { Button } from "react-bootstrap";
import "components/inputModal/styles.css";
interface IFormButtonProps {
  handleClose: Function;
  mode: string;
}

const FormButtonGroup: React.FC<IFormButtonProps> = (props) => {
  return (
    <div className="input-form-btn-group">
      <Button className="btn-inputCancel" onClick={() => props.handleClose()}>
        Close
      </Button>
      <Button className="btn-inputSuccess" type="submit">
        {props?.mode}
      </Button>
    </div>
  );
};

export default FormButtonGroup;
