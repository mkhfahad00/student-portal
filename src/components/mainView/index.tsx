import StudentInputModal from "components/inputModal";
import StudentDetails from "components/mainView/StudentDetails";
import StudentSummary from "components/mainView/StudentSummary";
import { useEffect, useState } from "react";
import React from "react";
import "components/mainView/styles.css";
import { IStudentState, IDispatchToProps } from "state/ducks/students/types";
import Header from "components/header";

type AllProps = IStudentState & IDispatchToProps;

const MainView: React.FC<AllProps> = ({ data, fetchPosts }: AllProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <Header setShow={setShow} />
      <StudentSummary />
      <StudentDetails />
      <StudentInputModal visible={show} setVisible={setShow} />
    </>
  );
};

export default MainView;
