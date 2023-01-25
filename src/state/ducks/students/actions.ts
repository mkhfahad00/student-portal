import { action } from "typesafe-actions";
import { IStudentRaw, StudentActionTypes } from "./types";
export const fetchStudents = () =>
	action(StudentActionTypes.FETCH_STUDENTS, [], {
		method: "get",
		route: "/students"
	});
export const fetchStudentsSuccess = (data: IStudentRaw[]) =>
	action(StudentActionTypes.FETCH_STUDENTS_SUCCESS, data);
export const fetchStudentsError = (message: string) =>
	action(StudentActionTypes.FETCH_STUDENTS_ERROR, message);