import React, {useContext, useEffect} from 'react'
import {ControlledEditor} from '@monaco-editor/react';
import {CodeContext} from '../contexts/CodeContext';

function CodeEditor() {

    const {code, codeOptions, updateCode, listenUpdates} = useContext(CodeContext);
    
    const codeChangedHandler = (ev,value) => {
        updateCode(value);
    }

    useEffect(() => {
        listenUpdates();
    })

    return (
        <ControlledEditor 
            height="65vh" 
            language={codeOptions.language.toLowerCase()} 
            options={{ fontSize: "16px", automaticLayout: true }} 
            value={code}
            onChange = {codeChangedHandler} 
        />
    )
}

export default CodeEditor
