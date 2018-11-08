import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm'
import { SubmissionError } from 'redux-form'

class App extends Component {
  submit = values => {
    const takenLogins = ['kent', 'andy', 'john', 'joel']; // Must come from API
    if(takenLogins.includes(values.username)){
      throw new SubmissionError({
        username: 'Wrong Username'
      })
    } else {
      alert(JSON.stringify(values, null, 4));
    }
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
