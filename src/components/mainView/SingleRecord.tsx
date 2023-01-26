import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownMenu from "components/dropdownMenu/index";
import { IStudentRaw } from "state/ducks/students/types";

type SingleRecordProps = {
  student: IStudentRaw;
};

const SingleRecord = ({ student }: SingleRecordProps) => {
  return (
    <>
      <Row style={{ marginTop: "20px" }}>
        <Col> {student?.name} </Col>
        <Col> {student?.marks} </Col>
        <Col> {student?.subject} </Col>
        <Col>
          <div className="gradeBox" style={{ color: "#ffb59d" }}>
            {student?.grade}
          </div>
        </Col>
        <Col>
          <div> Jan 29, 2022 </div>
          <div className="timeStamp"> at 8:00 PM</div>
        </Col>
        <Col>
          {" "}
          <DropdownMenu />{" "}
        </Col>
      </Row>
      <hr style={{ borderColor: "gray" }} />
    </>
  );
};

export default SingleRecord;
