import React from "react";
import Container from "react-bootstrap/Container";
import SingleRecord from "components/mainView/SingleRecord";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IStudentRaw } from "state/ducks/students/types";
import { useSelector } from "react-redux";
import { IApplicationState } from "state/ducks";

type IProps = {
  setStudentData: (std: IStudentRaw) => void;
  setShow: (x: boolean) => void;
  handleDelete: (x: string) => void;
};
const StudentDetails = (props: IProps) => {
  const studentList = useSelector(
    (state: IApplicationState) => state?.students?.data
  );
  const handleEdit = (student: IStudentRaw) => {
    props.setShow(true);
    props.setStudentData(student);
  };
  return (
    <Container>
      <>
        <Row style={{ marginTop: "20px" }} className="text">
          <Col> Name </Col>
          <Col> Marks </Col>
          <Col> Subject </Col>
          <Col> Grade </Col>
          <Col> Date </Col>
          <Col> Action </Col>
        </Row>
        <hr style={{ borderColor: "gray" }} />
        {studentList?.map((student: IStudentRaw, key) => (
          <SingleRecord
            student={student}
            key={key}
            handleEdit={() => handleEdit(student)}
            handleDelete={() => props.handleDelete(student?._id)}
          />
        ))}
      </>
    </Container>
  );
};

export default StudentDetails;
