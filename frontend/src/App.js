import React, { Component } from 'react'
import InterviewPage from './screens/InterviewPage';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css'
import 'react-reflex/styles.css'
export class App extends Component {

  constructor(props){
    super(props);
    this.state = {language:"python"}
  }

  /** Change the language */
  changeLanguage = (lang) =>{
    this.setState({language:lang});
  }

  render() {
    return (
      <div>
        <InterviewPage {...this.state} updateLanguage= {this.changeLanguage}/>
      </div>
    )
  }
}

export default App;

