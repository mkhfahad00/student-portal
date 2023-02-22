export interface IStudentState {
  readonly data: IStudentRaw[];
  readonly loading: boolean;
  readonly errors: [];
}
export type ApiResponse = Record<string, any>;
export interface IStudentRaw extends ApiResponse {
  // id: string | null;
  name: string;
  subject: string;
  marks: number;
  grade: string;
  // timestamp: string | null;
}
export const StudentActionTypes = {
  FETCH_STUDENTS: "@@student/FETCH_STUDENTS",
  FETCH_STUDENTS_SUCCESS: "@@student/FETCH_STUDENTS_SUCCESS",
  FETCH_STUDENTS_ERROR: "@@student/FETCH_STUDENTS_ERROR",

  ADD_STUDENT: "@@student/ADD_STUDENT",
  ADD_STUDENT_SUCCESS: "@@student/ADD_STUDENT_SUCCESS",
  ADD_STUDENT_ERROR: "@@student/ADD_STUDENT_ERROR",

  UPDATE_STUDENT: "@@student/UPDATE_STUDENT",
  UPDATE_STUDENT_SUCCESS: "@@student/UPDATE_STUDENT_SUCCESS",
  UPDATE_STUDENT_ERROR: "@@student/UPDATE_STUDENT_ERROR",

  DELETE_STUDENT: "@@student/DELETE_STUDENT",
  DELETE_STUDENT_SUCCESS: "@@student/DELETE_STUDENT_SUCCESS",
  DELETE_STUDENT_ERROR: "@@student/DELETE_STUDENT_ERROR",
};
