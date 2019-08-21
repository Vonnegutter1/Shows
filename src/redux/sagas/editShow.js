import { put } from 'redux-saga/effects';
import axios from 'axios';

function* editShow(action) {
    try {
        console.log('in editShow, action.payload is:', action.payload.editShow);
        yield axios.put(`/shows/edit`, action.payload.editShow);
        
    } catch (error) {
        console.log('Error', error);
        // alert('Could not update concert information. Sadness ensues.')
    }
}
export default editShow;
