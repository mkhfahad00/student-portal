import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainView from "components/mainView";
import { IApplicationState } from "state/ducks/index";
import { addStudent, fetchStudents } from "state/ducks/students/actions";
import { IStudentRaw, IStudentState } from "state/ducks/students/types";

const StudentsListContainer = () => {
  const dispatch = useDispatch();

  const stateToProps: IStudentState = useSelector(
    ({ students }: IApplicationState) => ({
      loading: students.loading,
      errors: students.errors,
      data: students.data,
    })
  );

  const dispatchToProps = {
    fetchStudents: useCallback(() => dispatch(fetchStudents()), [dispatch]),
    addStudent: useCallback(
      (payload: IStudentRaw) => dispatch(addStudent(payload)),
      [dispatch]
    ),
  };

  return <MainView {...stateToProps} {...dispatchToProps} />;
};

export default StudentsListContainer;
