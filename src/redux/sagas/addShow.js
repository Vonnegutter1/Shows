import { put } from 'redux-saga/effects';
import axios from 'axios';

function* addShow(action) {
    try {
        yield axios.post(`/shows/add`, action.payload);
        yield put({ type: 'SET_SHOW', payload: action.payload})
        yield put({ type: 'FETCH_SHOWS'})
    } catch (error) {
        console.log('Error', error);
        // alert('Could not get concert information. Sadness and shame.')
    }
}
export default addShow;
