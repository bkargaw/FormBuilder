import {combineReducers} from 'redux';
import FormReducer from './form_reducer';
// import previewReducer from './preview_reducer';
// import exportReducer from './export_reducer';

export default combineReducers({
  forms: FormReducer
});
