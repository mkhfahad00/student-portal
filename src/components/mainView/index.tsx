import StudentSummary from "components/mainView/StudentSummary";
import { useEffect, useState } from "react";
import React from "react";
// import "components/mainView/styles.css";
import { IStudentRaw, IStudentState } from "state/ducks/students/types";
import Header from "components/mainView/header";
import { ActionType } from "typesafe-actions";
import { fetchStudents } from "state/ducks/students/actions";
import { subjects, ISummaryData } from "utils";
import InputModalContainer from "containers/inputModalContainer";
import StudentDetailsContainer from "containers/studentDetailsContainer";
interface IProps extends IStudentState {
  fetchStudents: () => ActionType<typeof fetchStudents>;
  data: IStudentRaw[];
}

const MainView: React.FC<IProps> = ({ fetchStudents, data }) => {
  const [show, setShow] = useState(false);
  const [studentData, setStudentData] = useState<IStudentRaw | null>();
  const [dashboardData, setDashboardData] = useState<ISummaryData>();
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  useEffect(() => {
    summaryData();
  }, [data]);

  const summaryData = () => {
    let result = {} as ISummaryData;
    const sortedGrades = data.map((itx) => itx.grade).sort();

    result.topGrade = sortedGrades[0];
    result.minGrade = sortedGrades[sortedGrades.length - 1];

    //initialize hash-map for keeping track of failed and passed subjects as <subject, count>
    const passed = new Map();
    const failed = new Map();
    subjects.forEach((x) => {
      passed.set(x, 0);
      failed.set(x, 0);
    });

    //traverse the student list, increment passed/failed based on grade
    data.forEach((std) => {
      if (std?.grade !== "F") {
        passed.set(std?.subject, passed.get(std?.subject) + 1);
      } else {
        failed.set(std?.subject, failed.get(std?.subject) + 1);
      }
    });
    //since we need maxPassed and maxFailed only, convert hash map to array and sort it to get max and min value
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
