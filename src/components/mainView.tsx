import React from 'react'
import { useState } from 'react'
import InputModal from './inputModal'
import StudentDetails from './studentDetails'
import StudentSummary from './studentSummary'

function MainView() {
    // const [show, setShow] = useState(false)

  return (
    <>
      <div className="mainHdg">Student Portal</div>
      <hr style={{ borderColor: 'gray' }} />
      <StudentSummary />
      <StudentDetails />
      <InputModal/>
    </>
  )
}

export default MainView
