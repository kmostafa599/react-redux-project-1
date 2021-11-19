//Action Type   
export const RECIEVE_USERS = 'RECIEVE_USERS' 

//taking the id of the user
export function receiveTweets(id){

    return {
        type:RECIEVE_USERS,
        id,
    }

}