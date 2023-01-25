import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import {
	Action,
	MetaAction,
	PayloadAction,
	TypeConstant
} from "typesafe-actions";
import { studentReducer } from "./students/reducers";
import postSaga from "./students/sagas";
import { IStudentState } from "./students/types";
// The top-level state object
export interface IApplicationState {
	students: IStudentState;
}
export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}
export interface IReducerAction<TPayload>
	extends Action<TypeConstant>,
		PayloadAction<TypeConstant, TPayload> {}
export const rootReducer = combineReducers<IApplicationState>({
	students: studentReducer
});
export function* rootSaga() {
	yield all([fork(postSaga)]);
}
interface IMeta {
	method: string;
	route: string;
}