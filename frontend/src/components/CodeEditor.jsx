import React from 'react'
import Editor from '@monaco-editor/react';

function CodeEditor() {
    return (
            <Editor height="100vh" language="javascript" options={{fontSize:"20px"}}/>
    )
}

export default CodeEditor
