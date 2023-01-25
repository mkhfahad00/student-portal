import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IStudentRaw, IStudentState, StudentActionTypes } from "./types";
export const initialState: IStudentState = {
	data: [],
	errors: [],
	loading: false
};
export const studentReducer = (
	state: IStudentState = initialState,
	action: Action<TypeConstant> & PayloadAction<TypeConstant, IStudentRaw[]>
): IStudentState => {
	switch (action.type) {
		case StudentActionTypes.FETCH_STUDENTS: {
			return { ...state, loading: true };
		}
		case StudentActionTypes.FETCH_STUDENTS_SUCCESS: {
			return { ...initialState, data: action.payload };
		}
		case StudentActionTypes.FETCH_STUDENTS_ERROR: {
			return {
				...state
			};
		}
		default:
			return state;
	}
};