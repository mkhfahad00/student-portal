// import { IMetaAction } from "..";
export interface IStudentState {
  readonly data: IStudentRaw[];
  readonly loading: boolean;
  readonly errors: [];
}
export type ApiResponse = Record<string, any>;
export interface IStudentRaw extends ApiResponse {
  id: number;
  name: string;
  subject: string;
  marks: number;
  grade: string;
}
export const StudentActionTypes = {
  FETCH_STUDENTS: "@@student/FETCH_STUDENTS",
  FETCH_STUDENTS_SUCCESS: "@@student/FETCH_STUDENTS_SUCCESS",
  FETCH_STUDENTS_ERROR: "@@student/FETCH_STUDENTS_ERROR",
};

// export interface IDispatchToProps {
//   fetchPosts: () => IMetaAction;
// }
