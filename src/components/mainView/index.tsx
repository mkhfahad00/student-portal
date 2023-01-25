import StudentInputModal from "components/inputModal";
import StudentDetails from "components/mainView/StudentDetails";
import StudentSummary from "components/mainView/StudentSummary";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import React from "react";
import "components/mainView/styles.css";

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
