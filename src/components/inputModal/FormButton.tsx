import React from "react";
import { Button } from "react-bootstrap";
import 'styles/formButton.css'
interface IFormButtonProps {
  setVisible: Function;
}

const FormButtonGroup: React.FC<IFormButtonProps> = (props) => {
  return (
    <div className="input-form-btn-group">
      <Button
        className="btn-inputCancel"
        onClick={() => props.setVisible(false)}
      >
        Close
      </Button>
      <Button
        className="btn-inputSuccess"
        type="submit"
      >
        Add
      </Button>
    </div>
  );
};

export default FormButtonGroup;
