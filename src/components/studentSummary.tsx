import React from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap'
import SummaryBox from 'components/summaryBox'

function StudentSummary() {
  return (
    <>
      <Container style={{padding:"25px"}}>
        <Row>
          <Col>
            <SummaryBox />
          </Col>
          <Col>
            <SummaryBox />
          </Col>
          <Col>
            <SummaryBox />
          </Col>
          <Col>
            <SummaryBox />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default StudentSummary
