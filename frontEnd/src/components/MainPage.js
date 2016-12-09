import React, { Component } from 'react';
import ApartmentSearchComponent from './ApartmentSearchComponent'
import ResultsComponent from './ResultsComponent'

export default class MainPage extends Component {

  render(){
    return(
      <div>
        <ApartmentSearchComponent />
        <ResultsComponent />
      </div>
    )
  }
}
