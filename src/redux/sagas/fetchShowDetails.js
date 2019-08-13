import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* showDetailsRoot() {
    yield takeEvery ('FETCH_SHOW_DETAILS', fetchShowDetails)
}

function* fetchShowDetails(action) {
    console.log('in fetch Show Details', action.payload)

    try {
        const response = yield axios.get(`/shows/${action.payload.shows_id}`);
        yield put({ type: 'SET_SHOW_DETAILS', payload: response.data })
    } catch (error) {
        console.log('Error getting show details', error);
        alert('Could not get live show details.')
    }
}

 
export default showDetailsRoot;
