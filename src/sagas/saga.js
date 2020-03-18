
import { takeEvery} from "redux-saga/effects";

function* addDetailsAsync() {
    console.log("sagga");
}

export function* watchAddDetails() {
    console.log("take every");
  yield takeEvery("hello", addDetailsAsync);
}
