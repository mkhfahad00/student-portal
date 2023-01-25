import React from "react";
import { Row, Col, Container, Stack } from "react-bootstrap";
import SummaryBox from "components/mainView/SummaryBox";

function StudentSummary() {
  return (
    <>
      <Container style={{ padding: "25px" }}>
        <Row>
          <Col>
            <SummaryBox text="Top Grade" subText="A+" color="#4aaa9a" />
          </Col>
          <Col>
          <SummaryBox text="Most Passed" subText="English" color="#4aaa9a" />
          </Col>
          <Col>
          <SummaryBox text="Min Grade" subText="F" color="#ff6897" />
          </Col>
          <Col>
            <SummaryBox text="Most Passed" subText="Maths" color="#ff6897" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StudentSummary;
