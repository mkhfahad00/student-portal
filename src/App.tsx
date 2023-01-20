import React from 'react'
import './App.css'
import StudentDetails from './components/studentDetails'
import StudentSummary from './components/studentSummary'
const App: React.FC = () => {
  return (
    <>
      <div className='mainHdg'>Student Portal</div>
      <hr style={{borderColor:"gray"}}/>
      <StudentSummary />
      <StudentDetails />
    </>
  )
}

export default App
