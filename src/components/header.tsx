import React from "react";
import { Stack } from "react-bootstrap";

interface IHeaderProps {
  setShow: Function;
}
const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <>
      <div className="mainHdg">Student Portal</div>
      <hr style={{ borderColor: "gray" }} />
      <Stack
        direction="horizontal"
        style={{ justifyContent: "space-between", margin: "20px" }}
      >
        <div>
          <div className="subHdg">Students Summary</div>
        </div>
        <div className="ml-auto">
          <button
            className="btn btn-border"
            style={{ float: "right", marginRight: "200px" }}
            onClick={() => props.setShow(true)}
          >
            + Add Data
          </button>
        </div>
      </Stack>
    </>
  );
};

export default Header;
