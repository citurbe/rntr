import React, { Component } from 'react';
import { Link } from 'react-router'
import { logOut} from '../actions/action.js'
import LogInComponent from './LogInComponent.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

   // navbar = <ul id='nav'>
   //      <li><Link to='/log-in'>Log In</Link></li>
   //    </ul>


class LinkComponent extends Component {

  render(){
    let navbar
    if (!!this.props.userID){
      navbar = <ul id='nav'>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/preferences'>Preferences</Link></li>
        <li><Link to='saved'>Saved Searches</Link></li>
        <li><a href='javascript:' onClick={this.props.logOut}>Log Out</a></li>
      </ul>
    }
    else{
      navbar = <LogInComponent />
       }
    return (
      <div>{navbar}</div>
    )
  }
}

function mapStateToProps(state) {
  return state.user
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logOut }, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(LinkComponent)
