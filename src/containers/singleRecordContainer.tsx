import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteStudent } from "state/ducks/students/actions";
import { IStudentRaw } from "state/ducks/students/types";
import SingleRecord from "components/mainView/SingleRecord";

type IContainerProps = {
  student: IStudentRaw;
  handleEdit: () => void;
};

const SingleRecordContainer = ({ handleEdit, student }: IContainerProps) => {
  const dispatch = useDispatch();

  const dispatchToProps = {
    deleteStudent: useCallback(
      (payload: string) => dispatch(deleteStudent(payload)),
      [dispatch]
    ),
  };

  return (
    <SingleRecord
      student={student}
      handleEdit={() => handleEdit()}
      {...dispatchToProps}
    />
  );
};

export default SingleRecordContainer;
