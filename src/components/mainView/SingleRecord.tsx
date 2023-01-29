import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownMenu from "components/dropdownMenu/index";
import { IStudentRaw } from "state/ducks/students/types";

type SingleRecordProps = {
  student: IStudentRaw;
  handleEdit: () => void;
  handleDelete: () => void;
};

const SingleRecord = ({
  student,
  handleEdit,
  handleDelete,
}: SingleRecordProps) => {
  return (
    <>
      <Row style={{ marginTop: "20px" }}>
        <Col> {student?.name} </Col>
        <Col> {student?.marks} </Col>
        <Col> {student?.subject} </Col>
        <Col>
          <div className={`gradeBox grade${student.grade}`}>
            {student?.grade}
          </div>
        </Col>
        <Col>
          <div> {student?.date} </div>
          <div className="timeStamp"> at {student?.time}</div>
        </Col>
        <Col>
          {" "}
          <DropdownMenu handleEdit={handleEdit} handleDelete={handleDelete} />
        </Col>
      </Row>
      <hr style={{ borderColor: "gray" }} />
    </>
  );
};

export default SingleRecord;
