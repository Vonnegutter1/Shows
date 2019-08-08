import { put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchShowDetails(action) {
    try {
        const response = yield axios.get(`/shows/details?id=${action.payload}`);
        yield put({ type: 'SET_SHOW_DETAILS', payload: response.data })
    } catch (error) {
        console.log('Error getting show details', error);
        alert('Could not get live show details.')
    }
}


export default fetchShowDetails;
