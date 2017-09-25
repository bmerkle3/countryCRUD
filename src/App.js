import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Simple Country (CRUD) App',
      countries: []
    };
  }

  // to be called before DOM loads.. make AJAX calls here:
  componentDidMount() {
    console.log('COMPONENT HAS MOUNTED');
  }

  addCountry(event) {
    event.preventDefault();
    let data = {
      country_name: this.refs.country_name.value,
      language: this.refs.language.value
    };
    var request = new Request('http://localhost3000/api/new-country', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
    // more modern version of xml http request
    fetch(request).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  }

  render() {
    let title = this.state.title;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>
          <form ref="countryForm">
            <input type="text" ref="country_name" placeholder="country name" />
            <input type="text" ref="language" placeholder="language" />
            <button onClick={this.addCountry.bind(this)}>Add!</button>
          </form>
        </div>
        <p className="App-intro">play around here to make it look like five-to-nine site.</p>
      </div>
    );
  }
}

export default App;
