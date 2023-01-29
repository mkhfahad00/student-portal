import StudentInputModal from "components/inputModal";
import StudentDetails from "components/mainView/StudentDetails";
import StudentSummary from "components/mainView/StudentSummary";
import { useEffect, useState } from "react";
import React from "react";
import "components/mainView/styles.css";
import { IStudentRaw, IStudentState } from "state/ducks/students/types";
import Header from "components/mainView/header";
import { ActionType } from "typesafe-actions";
import {
  addStudent,
  deleteStudent,
  fetchStudents,
  updateStudent,
} from "state/ducks/students/actions";
interface IProps extends IStudentState {
  fetchStudents: () => ActionType<typeof fetchStudents>;
  addStudent: (payload: IStudentRaw) => ActionType<typeof addStudent>;
  updateStudent: (payload: IStudentRaw) => ActionType<typeof updateStudent>;
  deleteStudent: (payload: string) => ActionType<typeof deleteStudent>;
}
const MainView: React.FC<IProps> = ({
  fetchStudents,
  addStudent,
  updateStudent,
  deleteStudent,
}) => {
  const [show, setShow] = useState(false);
  const [studentData, setStudentData] = useState<IStudentRaw>();
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleDelete = (id: string) => {
    deleteStudent(id);
    fetchStudents();
  };

  return (
    <>
      <Header setShow={setShow} />
      <StudentSummary />
      <StudentDetails
        setStudentData={setStudentData}
        setShow={setShow}
        handleDelete={(id: string) => handleDelete(id)}
      />
      <StudentInputModal
        visible={show}
        setVisible={setShow}
        studentData={studentData as IStudentRaw}
        updateStudent={updateStudent}
        addStudent={addStudent}
        setStudentData={setStudentData}
      />
    </>
  );
};

export default MainView;
