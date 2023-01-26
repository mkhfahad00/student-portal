import StudentInputModal from "components/inputModal";
import StudentDetails from "components/mainView/StudentDetails";
import StudentSummary from "components/mainView/StudentSummary";
import { useEffect, useState } from "react";
import React from "react";
import "components/mainView/styles.css";
import { IStudentState } from "state/ducks/students/types";
import Header from "components/mainView/header";
import { ActionType } from "typesafe-actions";
import { fetchStudents } from "state/ducks/students/actions";

interface IProps extends IStudentState {
  fetchStudents: () => ActionType<typeof fetchStudents>;
}

const MainView: React.FC<IProps> = ({ data, fetchStudents }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  console.log("Student Data:", data);

  return (
    <>
      <Header setShow={setShow} />
      <StudentSummary />
      <StudentDetails data={data} />
      <StudentInputModal visible={show} setVisible={setShow} />
    </>
  );
};

export default MainView;
