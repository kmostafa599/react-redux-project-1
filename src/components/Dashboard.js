import React, { Component } from 'react'
import {connect} from 'react-redux'
import Tweet from './Tweet'

//Actions symbol -> ()  
//data symbol -> #


//(get) specific #tweet# from list of #tweets# 
//(get) #replies# of specific #tweet# from a list of #tweets# 




class Dashboard extends Component {
  render() {
    return (
      <div>
          {//list of tweets
            //new tweet
            //replies
            <ul>
              {this.props.tweetsIds.map((id)=>{
                //console.log(id)
                return(
                  <li key = {id}>
                    <Tweet id={id}/>
                  </li>)
              })}
            </ul>
          }
      </div>
    )
  }
}

function mapStateToProps({tweets}){
  return {
    tweetsIds: Object.keys(tweets)
      .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp ),
  }
}



export default connect(mapStateToProps)(Dashboard)