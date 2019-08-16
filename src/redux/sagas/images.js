import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* showImagesRoot() {
    yield takeEvery('FETCH_SHOW_IMAGES', fetchShowImages)
}

function* fetchShowImages(action) {
    console.log('in fetch Show Images', action.payload)

    try {
        const response = yield axios.get(`shows/images/${action.payload}`);
        yield put({ type: 'SET_SHOW_IMAGES', payload: response.data })
    } catch (error) {
        console.log('Error getting show images', error);
        alert('Could not get live show details.')
    }
}

export default showImagesRoot;
