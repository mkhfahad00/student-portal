import StudentInputModal from "components/inputModal/inputModal";
import StudentDetails from "components/studentDetails";
import StudentSummary from "components/studentSummary";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import React from "react";
import 'styles/mainView.css'

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
      <StudentInputModal isEdit={false} visible={show}  setVisible={setShow}/>
    </>
  );
}

export default MainView;
