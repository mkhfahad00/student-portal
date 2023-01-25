import React from 'react'
import Container from 'react-bootstrap/Container'
import SingleRecord from 'components/mainView/SingleRecord'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const StudentDetails = () => {
  return (
    <Container>
      <Row style={{marginTop:"20px"}} className="text">
      <Col> Name </Col>
        <Col> Marks </Col>
        <Col> Subject </Col>
        <Col> Grade </Col>
        <Col> Date </Col>
        <Col> Action </Col>
      </Row>
      <hr style={{borderColor:"gray"}}/>
      <SingleRecord/>
      <SingleRecord/>
      <SingleRecord/>

    </Container>
  )
}

export default StudentDetails
