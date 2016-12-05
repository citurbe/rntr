import React from 'react'
import { getSchools } from '../actions/action.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



const SchoolComponent = (props) => {
// should not be a functional component
  function handleSubmit(event){
    event.preventDefault()
    props.getSchools(event.target.children[1].value, event.target.children[4].value)
  }

  function schoolList() {
    return props.schools.map(function(school) {
      return (<li>{school.name}: {school.lat}, {school.lon}</li>)
    })
  }
  return (
    <div>
      <br/>
      <form onSubmit={handleSubmit.bind(this)}>
        <label htmlFor='zipcode'>Zipcode:</label>
        <input type='text' id='zipcode' /><br/>
        <label htmlFor='grade'>Minimum Grade:</label>
        <select type='text' id='grade'>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>

        <input type='submit' />
      </form>
      <h4>Giant schools hash:</h4>
      <ul>
        {schoolList()}
      </ul>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getSchools: getSchools},dispatch)
}

function mapStateToProps(state) {
  return {schools: state.schools || []}
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolComponent)
// module.exports = MapComponent
