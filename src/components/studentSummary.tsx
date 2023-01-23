// import React from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap'
import SummaryBox from 'components/summaryBox'

function StudentSummary() {
  return (
    <>
      <Stack direction="horizontal" style={{ justifyContent: 'space-between', margin:"20px" }}>
        <div>
          <div className="subHdg">Students Summary</div>
        </div>
        <div className="ml-auto">
          <button
            className="btn btn-border"
            style={{ float: 'right', marginRight:"200px" }}
          >
            + Add Data
          </button>
        </div>
      </Stack>
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
