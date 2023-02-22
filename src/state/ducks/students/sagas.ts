import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import apiCaller from "state/utils/apiCaller";
import { ActionType } from "typesafe-actions";
import {
  addStudent,
  addStudentError,
  addStudentSuccess,
  deleteStudent,
  deleteStudentError,
  deleteStudentSuccess,
  fetchStudents,
  fetchStudentsError,
  fetchStudentsSuccess,
  updateStudent,
  updateStudentError,
  updateStudentSuccess,
} from "state/ducks/students/actions";
import { IStudentRaw, StudentActionTypes } from "state/ducks/students/types";
import { API } from "aws-amplify";

import { listStudents } from "graphql/queries";
import {
  createStudent as createStudentMutation,
  updateStudent as updateStudentMutation,
  deleteStudent as deleteStudentMutation,
} from "graphql/mutations";

function* handleStudentFetch(
  action: ActionType<typeof fetchStudents>
): Generator {
  try {
    const res: IStudentRaw[] | any = yield API.graphql({ query: listStudents });
    yield put(fetchStudentsSuccess(res.data.listStudents.items));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchStudentsError(err.stack!));
    } else {
      yield put(fetchStudentsError("An unknown error occured."));
    }
  }
}
function* handleStudentDelete(
  action: ActionType<typeof deleteStudent>
): Generator {
  try {
    yield API.graphql({
      query: deleteStudentMutation,
      variables: { input: { id: action.meta.id } },
    });
    yield put(deleteStudentSuccess(action.payload));
  } catch (err) {
    if (err instanceof Error) {
      yield put(deleteStudentError(err.stack!));
    } else {
      yield put(deleteStudentError("An unknown error occured."));
    }
  }
}
function* handleStudentAdd(action: ActionType<typeof addStudent>): Generator {
  try {
    const res: IStudentRaw | any = yield API.graphql({
      query: createStudentMutation,
      variables: { input: action.payload },
    });

    yield put(addStudentSuccess(res.data.createStudent));
  } catch (err) {
    if (err instanceof Error) {
      yield put(addStudentError(err.stack!));
    } else {
      yield put(addStudentError("An unknown error occured."));
    }
  }
}
function* handleStudentUpdate(
  action: ActionType<typeof updateStudent>
): Generator {
  try {
    const payload = { ...action.payload };
    delete payload.id;
    yield yield API.graphql({
      query: updateStudentMutation,
      variables: { input: { id: action.meta.id } },
    });

    yield put(updateStudentSuccess(action.payload));
  } catch (err) {
    if (err instanceof Error) {
      yield put(updateStudentError(err.stack!));
    } else {
      yield put(updateStudentError("An unknown error occured."));
    }
  }
}

function* watchFetchRequest(): Generator {
  yield takeLatest(StudentActionTypes.FETCH_STUDENTS, handleStudentFetch);
}
function* watchAddRequest(): Generator {
  yield takeEvery(StudentActionTypes.ADD_STUDENT, handleStudentAdd);
}

function* watchDeleteRequest(): Generator {
  yield takeEvery(StudentActionTypes.DELETE_STUDENT, handleStudentDelete);
}
function* watchUpdateRequest(): Generator {
  yield takeEvery(StudentActionTypes.UPDATE_STUDENT, handleStudentUpdate);
}

export default function* studentSaga() {
  yield all([fork(watchAddRequest)]);
  yield all([fork(watchDeleteRequest)]);
  yield all([fork(watchFetchRequest)]);
  yield all([fork(watchUpdateRequest)]);
}
