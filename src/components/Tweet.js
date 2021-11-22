import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'



//Actions symbol -> ()  
//data symbol -> #



//get a particular #tweet data#
//get #authed user# (the currentley logged in user) so the user can toggle like and reply


//this component will be CONTAINER so it can dispatch an action from the STORE ,,, and also can read state from the store --so we will use connect() method here

class Tweet extends Component {
  render() {
    //console.log(this.props)
    return (
      <div className='tweet'>
        {//username
        //timestamp
        //tweet text
        //reply button (and acounter)
        //like button (and acounter)
        
      }
      </div>
    )
  }
}

//          from the store state           ,  props
function mapStateToProps({authedUser, users, tweets},{id}){

  const tweet = tweets[id]
  console.log("tweet ID: ", id)
  console.log("tweet: ", tweet)
  console.log("auhtor: ",tweet.author)
  console.log("users: " ,users)
  console.log("auhtor from users: ",users[tweet.author])
  //console.log(tweets[id].author)
  return { 
    authedUser,
    tweet : formatTweet(tweet, users[tweet.author], authedUser)
  }


}

export default connect(mapStateToProps)(Tweet)