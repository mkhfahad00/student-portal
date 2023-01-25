import StudentInputModal from "components/inputModal";
import StudentDetails from "components/mainView/StudentDetails";
import StudentSummary from "components/mainView/StudentSummary";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import React from "react";
import 'components/mainView/styles.css'

function MainView() {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="mainHdg">Student Portal</div>
      <hr style={{ borderColor: "gray" }} />
      <Stack
        direction="horizontal"
        style={{ justifyContent: "space-between", margin: "20px" }}
      >
        <div>
          <div className="subHdg">Students Summary</div>
        </div>
        <div className="ml-auto">
          <button
            className="btn btn-border"
            style={{ float: "right", marginRight: "200px" }}
            onClick={()=>setShow(true)}
          >
            + Add Data
          </button>
        </div>
      </Stack>
      <StudentSummary />
      <StudentDetails />
      <StudentInputModal visible={show}  setVisible={setShow}/>
    </>
  );
}

export default MainView;
