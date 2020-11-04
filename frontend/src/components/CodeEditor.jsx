import React from 'react'
import MonacoEditor from '@monaco-editor/react';

function CodeEditor({ language }) {
    return (
        <MonacoEditor height="65vh" language={language} options={{ fontSize: "16px", automaticLayout: true }} value="# Type your solution here" />
    )
}

export default CodeEditor
