import { getIntialData }  from '../utils/api' 
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'



const AUTHED_ID = "tylermcginnis"

export function handleIntialData(){
    // API -> ACTION CREATOR -> MIDDLEWARE -> DISPATCHING ACTION -> REDUCER -> NEW STATE
    //returning a function   using redux thunk pattern 
    //THUNK PATTERN IS USED WHEN WE WANT TO MAKE ASYNC REQUEST
    // WE CAN USE A NORMAL ACTION CREATOR INSTEAD BUT WE NEED TO GET THE DATA FROM THE SERVER SO WE USE REDUX THUNK 
    return (dispatch)=>{
        //async request inside the function instead of returning an object
        return getIntialData()
        .then(({users,tweets})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
        })
        
    }
}