import { action } from "typesafe-actions";
import { IStudentRaw, StudentActionTypes } from "state/ducks/students/types";

export const fetchStudents = () =>
  action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: "get",
    route: "/students",
  });
export const fetchStudentsSuccess = (data: IStudentRaw[]) =>
  action(StudentActionTypes.FETCH_STUDENTS_SUCCESS, data);
export const fetchStudentsError = (message: string) =>
  action(StudentActionTypes.FETCH_STUDENTS_ERROR, message);

export const addStudent = (payload: IStudentRaw) =>
  action(StudentActionTypes.ADD_STUDENT, payload, {
    method: "post",
    route: "/students",
  });

export const addStudentSuccess = (data: IStudentRaw) =>
  action(StudentActionTypes.ADD_STUDENT_SUCCESS, data);
export const addStudentError = (message: string) =>
  action(StudentActionTypes.ADD_STUDENT_ERROR, message);
