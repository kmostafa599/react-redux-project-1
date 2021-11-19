import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleIntialData } from '../actions/shared'


//________________
//   STORE
//--------------
// TWEETS
//  USERS
// AUTHEDUSER
//_______________



class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleIntialData())//handleIntialData() is the action
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)