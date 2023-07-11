import UserActionTypes from './action-types'

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {
    if(action.type === UserActionTypes){
        return {...state , currentUser: action.payload}
    }
    return state
};

export default userReducer;