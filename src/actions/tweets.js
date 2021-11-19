//Action Type   
export const RECIEVE_TWEETS = 'RECIEVE_TWEETS' 

export function receiveTweets(tweets){

    return {
        type:RECIEVE_TWEETS,
        tweets,
    }

}