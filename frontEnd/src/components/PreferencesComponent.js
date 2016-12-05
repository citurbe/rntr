import React from 'react'
import { savePreferences } from '../actions/action.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class PreferencesComponent extends React.Component{
  constructor(props){
    super(props)
      this.state = {destination: "",commute: 1, schools: 1, amenities: 1, safety: 1, category_1: "", category_2: "", category_3: ""}
  }

  // handleCommuteChange(event){
  //   this.setState({commute_weight: event.target.value})
  // }

  handleSubmit(event){
    event.preventDefault()
    debugger
    this.props.savePreferences(this.props.user, this.state)
  }

  handleChange(event){
    
    let newStateAttr = {}
    newStateAttr[event.target.id] = event.target.value
    this.setState(newStateAttr)
  }



  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <p><label id="destination">Destination:</label>
          <input type="text" id="destination" onChange={this.handleChange.bind(this)}/></p>

          <p><label id="commute">Commute:</label>
          <select id="commute" onChange={this.handleChange.bind(this)}>
              <option value='-'>-</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
          </select></p>

          <p><label id="schools">Schools:</label>
            <select id="schools" onChange={this.handleChange.bind(this)}>
                <option value='-'>-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
            </select></p>

          <p><label id="safety">Safety:</label>
            <select id="safety" onChange={this.handleChange.bind(this)}>
                <option value='-'>-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
            </select></p>

          

          <p><label id="amenities">Amenities:</label>

            <label id="category_1"> Category 1:</label>
            <input type="text" id="category_1" onChange={this.handleChange.bind(this)} /> 
         
            <label id="category_2"> Category 2:</label>
            <input type="text" id="category_2" onChange={this.handleChange.bind(this)} /> 
         
            <label id="category_3"> Category 3:</label>
            <input type="text" id="category_3" onChange={this.handleChange.bind(this)} /> 
          
         
            <select id="amenities" onChange={this.handleChange.bind(this)}>
                <option value='-'>-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
            </select></p>

          <p><input type="submit"/></p>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({savePreferences: savePreferences}, dispatch)
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesComponent)
