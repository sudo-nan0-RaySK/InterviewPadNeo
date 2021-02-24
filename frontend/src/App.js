import React, { Component } from 'react'
import InterviewPage from './screens/InterviewPage';
import CodeContextProvider from './contexts/CodeContext';
import DrawingContextProvider from './contexts/DrawingContext';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css'
import 'react-reflex/styles.css'
export class App extends Component {

  render() {
    return (
      <div>
        <DrawingContextProvider>
          <CodeContextProvider>
            <InterviewPage />
        </CodeContextProvider>
        </DrawingContextProvider>
      </div>
    )
  }
}

export default App;

