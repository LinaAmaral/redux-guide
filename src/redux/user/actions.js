import UserActionTypes from "./action-types"

export const handleLogout = () =>{
    return {type: UserActionTypes.LOGOUT}
}

export const handleLogin = (payload) =>{
    return {type: UserActionTypes.LOGIN , payload: payload}
}