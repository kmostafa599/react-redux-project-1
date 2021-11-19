import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleIntialData } from '../actions/shared'
import Dashboard from './Dashboard'


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
        <Dashboard/>
      </div>
    )
  }
}

export default connect()(App)