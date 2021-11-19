import { RECIEVE_USERS } from "../actions/users";



//intialize users in the store to empty object
export  function users(state ={},action){

    switch(action.type){
        case RECIEVE_USERS:
            return{
                ...state,
                ...action.users,
            }
        default:
            return state
    }



}