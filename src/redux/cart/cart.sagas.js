import { takeLatest, put, all, call } from "redux-saga/effects";

import { clearCart } from "./cart.actions";
import UserActionTypes from "../user/user-action-types";

export function* clearCartOnSignUp() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignUp);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
