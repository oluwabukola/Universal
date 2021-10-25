import { combineReducers } from 'redux';
import authReducer from './AuthReducer/AuthReducer';
import profileReducer from './ProfileReducer/ProfileReducer';

const Reducer = combineReducers({
    authReducer: authReducer,
    profileReducer: profileReducer
});

const rootReducer = (state, action) => {
    return Reducer(state, action)
}
export default rootReducer;