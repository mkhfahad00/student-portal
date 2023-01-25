import StudentInputModal from "components/inputModal/inputModal";
import StudentDetails from "components/studentDetails";
import StudentSummary from "components/studentSummary";
import { useEffect, useState } from "react";
import Header from "components/header";
import React from "react";
import "styles/mainView.css";
import {
	IDispatchToProps,
	// IStudentRaw,
	IStudentState
} from "state/ducks/students/types";

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
      <StudentInputModal isEdit={false} visible={show} setVisible={setShow} />
    </>
  );
};

export default MainView;
