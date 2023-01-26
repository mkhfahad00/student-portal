import React from "react";
import Container from "react-bootstrap/Container";
import SingleRecord from "components/mainView/SingleRecord";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IStudentRaw } from "state/ducks/students/types";

type StudentProps = {
  data: IStudentRaw[];
};

const StudentDetails = ({ data }: StudentProps) => {
  console.log("data in studentDetails", data);

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
        {data?.map((student: IStudentRaw) => (
          <SingleRecord student={student} />
        ))}
      </>
    </Container>
  );
};

export default StudentDetails;
