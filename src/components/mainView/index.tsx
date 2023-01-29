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
import { subjects, ISummaryData } from "utils";
interface IProps extends IStudentState {
  fetchStudents: () => ActionType<typeof fetchStudents>;
  addStudent: (payload: IStudentRaw) => ActionType<typeof addStudent>;
  updateStudent: (payload: IStudentRaw) => ActionType<typeof updateStudent>;
  deleteStudent: (payload: string) => ActionType<typeof deleteStudent>;
  data: IStudentRaw[];
}

const MainView: React.FC<IProps> = ({
  fetchStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  data,
}) => {
  const [show, setShow] = useState(false);
  const [studentData, setStudentData] = useState<IStudentRaw>();
  const [dashboardData, setDashboardData] = useState<ISummaryData>();
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  useEffect(() => {
    summaryData();
  }, [data]);

  const handleDelete = (id: string) => {
    deleteStudent(id);
    fetchStudents();
  };

  const summaryData = () => {
    let result = {} as ISummaryData;
    console.log("data", data);
    const sortedGrades = data.map((itx) => itx.grade).sort();

    result.topGrade = sortedGrades[0];
    result.minGrade = sortedGrades[sortedGrades.length - 1];

    //initialize hash-map
    const passed = new Map();
    const failed = new Map();
    subjects.forEach((x) => {
      passed.set(x, 0);
      failed.set(x, 0);
    });

    data.forEach((std) => {
      if (std?.grade !== "F") {
        passed.set(std?.subject, passed.get(std?.subject) + 1);
      } else {
        failed.set(std?.subject, failed.get(std?.subject) + 1);
      }
    });

    //convert to array and sort
    const sortedPassed = Array.from(passed).sort((a, b) => b[1] - a[1]);
    const sortedFailed = Array.from(failed).sort((a, b) => b[1] - a[1]);

    if (sortedPassed[0][1] !== 0) {
      result.maxPass = sortedPassed[0][0];
    } else {
      result.maxPass = "";
    }

    if (sortedFailed[0][1] !== 0) {
      result.maxFail = sortedFailed[0][0];
    } else {
      result.maxFail = "";
    }
    setDashboardData(result);
  };

  return (
    <>
      <Header setShow={setShow} />
      <StudentSummary {...dashboardData} />
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
