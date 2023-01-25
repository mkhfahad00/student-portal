import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { IMetaAction } from "..";
import apiCaller from "../../utils/apiCaller";
import { fetchStudentsError, fetchStudentsSuccess } from "./actions";
import { IStudentRaw, StudentActionTypes } from "./types";

/**
 * @desc Business logic of effect.
 */
function* handleFetch(action: IMetaAction): Generator {
	try {
		const res: IStudentRaw[] | any = yield call(
			apiCaller,
			action.meta.method,
			action.meta.route
		);

		yield put(fetchStudentsSuccess(res));
	} catch (err) {
		if (err instanceof Error) {
			yield put(fetchStudentsError(err.stack!));
		} else {
			yield put(fetchStudentsError("An unknown error occured."));
		}
	}
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
	yield takeEvery(StudentActionTypes.FETCH_STUDENTS, handleFetch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* postSaga() {
	yield all([fork(watchFetchRequest)]);
}