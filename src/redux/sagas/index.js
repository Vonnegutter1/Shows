import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import showSaga from './showSaga';
import showDetailRoot from './fetchShowDetails';
import addShow from './addShow';
import images from './images';
import editShow from './editShow';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user


export default function* rootSaga() {
  
  yield takeEvery('FETCH_SHOWS', showSaga)
  yield takeEvery('ADD_SHOW', addShow)
  yield takeEvery('EDIT_SHOW', editShow)

  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    showSaga(),
    showDetailRoot(),
    addShow(),
    images(),
    editShow(),
  ]);
}
