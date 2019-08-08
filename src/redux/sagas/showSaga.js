import { put } from 'redux-saga/effects';
import axios from 'axios';



function* showSaga() {
    try {
        const response = yield axios.get('/shows');
        yield put({ type: 'SET_SHOWS', payload: response.data})
    } catch (error) {
        console.log('Error getting show information', error);
        alert('Could not get live show information.')
    }
}


export default showSaga;
