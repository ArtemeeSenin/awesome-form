import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm'

class App extends Component {
  submit = values => {
    console.log(JSON.stringify(values, null, 4));
  }
  getInitialValues() {
    return {
      name: 'Artem',
      preference: 'spaces',
      newsletter: true
    }
  }
  render() {
    return (
      <RegisterForm 
        onSubmit={this.submit} 
        initialValues={this.getInitialValues()}
      />
    );
  }
}

export default App;
