import { SET_AUTHED_USER } from "../actions/authedUser"



//intialize authed user in the store to null
export function authedUser(state =null,action){

    switch(action.type){
        case SET_AUTHED_USER:
            return action.id
        default:
            return state
    }



}