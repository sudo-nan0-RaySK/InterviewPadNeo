import React, {useContext} from 'react'
import {ControlledEditor} from '@monaco-editor/react';
import {CodeContext} from '../contexts/CodeContext';

function CodeEditor() {

    const {code, codeOptions, updateCode} = useContext(CodeContext);

    const codeChangedHandler = (ev,value) => {
        updateCode(value);
    }

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
