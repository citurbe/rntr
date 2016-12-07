import React from 'react'
import { savePreferences } from '../actions/action.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Autocomplete from 'react-google-autocomplete';
import auth from '../lib/auth'

class PreferencesComponent extends React.Component{
  constructor(props){
    super(props)
      this.state = {destination: "",commute: 1, schools: 1, amenities: 1, safety: 1, category_1: "", category_2: "", category_3: ""}

      this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.savePreferences(this.props.user, this.state)
  }

  handleChange(event){
    let newStateAttr = {}
    newStateAttr[event.target.id] = parseInt(event.target.value)

    this.setState(newStateAttr)
  }

  handleCategoryChange(event){
    let newStateAttr = {}
    newStateAttr[event.target.id] = event.target.value
    this.setState(newStateAttr)
  }

  render(){
    return(

      <div id='padding'>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <label id="destination">Destination:</label>
          <Autocomplete
            id="destination"
            style={{width: '30%'}}
            onPlaceSelected={(place) => {
              this.setState({"destination": place.formatted_address})
              this.setState({"zip": place.address_components[7].long_name})
              console.log(place);
            }}
            types={['address']}
            componentRestrictions={{country: "us"}}
          />


          <p><label id="commute">Commute: </label>

          <select id="commute" onChange={this.handleChange.bind(this)}>
            <option value='-'>-</option>
              {
                this.options.map(opt => {
                return <option value={opt}>{opt}</option>
              })}
          </select></p>

          <p><label id="schools">Schools: </label>
            <select id="schools" onChange={this.handleChange.bind(this)}>
              <option value='-'>-</option>
                {
                  this.options.map(opt => {
                  return <option value={opt}>{opt}</option>
                })}
            </select></p>

          <p><label id="safety">Safety: </label>
            <select id="safety" onChange={this.handleChange.bind(this)}>
              <option value='-'>-</option>
                {
                  this.options.map(opt => {
                  return <option value={opt}>{opt}</option>
                })}
            </select></p>

          <p><label id="amenities">Amenities: </label>
            <select id="amenities" onChange={this.handleChange.bind(this)}>
              <option value='-'>-</option>
                {
                  this.options.map(opt => {
                  return <option value={opt}>{opt}</option>
                })}
            </select>
          </p>
            <p>
            <label id="category_1">Amenity Category 1:</label>
            <input type="text" id="category_1" onChange={this.handleCategoryChange.bind(this)} />
            </p>
            <p>
            <label id="category_2">Amenity Category 2:</label>
            <input type="text" id="category_2" onChange={this.handleCategoryChange.bind(this)} />
            </p>
            <p>
            <label id="category_3">Amenity Category 3:</label>
            <input type="text" id="category_3" onChange={this.handleCategoryChange.bind(this)} />
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(auth(PreferencesComponent))
