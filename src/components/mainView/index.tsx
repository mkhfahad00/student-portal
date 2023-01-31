import StudentSummary from "components/mainView/StudentSummary";
import { useEffect, useState } from "react";
import React from "react";
import "components/mainView/styles.css";
import { IStudentRaw, IStudentState } from "state/ducks/students/types";
import Header from "components/mainView/header";
import { ActionType } from "typesafe-actions";
import { fetchStudents } from "state/ducks/students/actions";
import { ISummaryData } from "utils";
import InputModalContainer from "containers/inputModalContainer";
import StudentDetailsContainer from "containers/studentDetailsContainer";
interface IProps extends IStudentState {
  fetchStudents: () => ActionType<typeof fetchStudents>;
  dashboardData: ISummaryData;
}

const MainView: React.FC<IProps> = ({ fetchStudents, dashboardData }) => {
  const [show, setShow] = useState(false);
  const [studentData, setStudentData] = useState<IStudentRaw | null>();
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <>
      <Header setShow={setShow} />
      <StudentSummary {...dashboardData} />
      <StudentDetailsContainer
        setStudentData={setStudentData}
        setShow={setShow}
      />
      <InputModalContainer
        visible={show}
        setVisible={setShow}
        setStudentData={setStudentData}
        studentData={studentData as IStudentRaw}
      />
    </>
  );
};

export default MainView;
