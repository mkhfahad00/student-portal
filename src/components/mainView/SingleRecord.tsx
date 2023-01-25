import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownMenu from 'components/dropdownMenu/index'
function SingleRecord() {
  return (
    <>
      <Row style={{ marginTop: '20px' }}>
        <Col> Ahmed </Col>
        <Col> 96 </Col>
        <Col> Math </Col>
        <Col>
          <div className="gradeBox" style={{ color: '#ffb59d' }}>
            B+
          </div>
        </Col>
        <Col>
          <div> Jan 29, 2022 </div>
          <div className="timeStamp"> at 8:00 PM</div>
        </Col>
        <Col>
          {' '}
          <DropdownMenu />{' '}
        </Col>
      </Row>
      <hr style={{ borderColor: 'gray' }} />
    </>
  )
}

export default SingleRecord
