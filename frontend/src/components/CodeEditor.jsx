import React from 'react'
import MonacoEditor from '@monaco-editor/react';

function CodeEditor({ language }) {
    return (
        <MonacoEditor height="70vh" language={language} options={{ fontSize: "20px" }} value="# Type your solution here" />
    )
}

export default CodeEditor
