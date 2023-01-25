import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainView from "components/mainView";
import { IApplicationState } from "../state/ducks/index";
import { fetchStudents } from "../state/ducks/students/actions";
import { IStudentState } from "../state/ducks/students/types";

const StudentsListContainer = () => {
	const dispatch = useDispatch();

	const stateToProps: IStudentState = useSelector(
		({ students }: IApplicationState) => ({
			loading: students.loading,
			errors: students.errors,
			data: students.data
		})
	);

	const dispatchToProps = {
		fetchPosts: useCallback(() => dispatch(fetchStudents()), [dispatch])
	};

	return <MainView {...stateToProps} {...dispatchToProps} />;
};

export default StudentsListContainer;