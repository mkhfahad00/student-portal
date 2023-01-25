import { IMetaAction } from "..";
export interface IStudentState {
	readonly data: IStudentRaw[];
	readonly loading: boolean;
	readonly errors: [];
}
export type ApiResponse = Record<string, any>;
export interface IStudentRaw extends ApiResponse {
	id: number;
	title: string;
	body: string;
	userId: number;
}
export const StudentActionTypes = {
	FETCH_STUDENTS: "@@post/FETCH_STUDENTS",
	FETCH_STUDENTS_SUCCESS: "@@post/FETCH_STUDENTS_SUCCESS",
	FETCH_STUDENTS_ERROR: "@@post/FETCH_STUDENTS_ERROR"
};

export interface IDispatchToProps {
	fetchPosts: () => IMetaAction;
}