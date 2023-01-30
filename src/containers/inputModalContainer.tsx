import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "state/ducks/students/actions";
import { IStudentRaw } from "state/ducks/students/types";
import StudentInputModal from "components/inputModal";

interface IModalContainerProps {
  visible: boolean;
  setVisible: (x: boolean) => void;
  studentData: IStudentRaw;
  setStudentData: (std: IStudentRaw) => void;
}

const InputModalContainer = ({
  visible,
  setVisible,
  studentData,
  setStudentData,
}: IModalContainerProps) => {
  const dispatch = useDispatch();

  const dispatchToProps = {
    addStudent: useCallback(
      (payload: IStudentRaw) => dispatch(addStudent(payload)),
      [dispatch]
    ),
    updateStudent: useCallback(
      (payload: IStudentRaw) => dispatch(updateStudent(payload)),
      [dispatch]
    ),
  };

  return (
    <StudentInputModal
      visible={visible}
      setVisible={setVisible}
      studentData={studentData as IStudentRaw}
      setStudentData={setStudentData}
      {...dispatchToProps}
    />
  );
};

export default InputModalContainer;
