// import React from 'react'
// import { useState } from 'react'
import InputModal from 'components/inputModal'
import StudentDetails from 'components/studentDetails'
import StudentSummary from 'components/studentSummary'

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
