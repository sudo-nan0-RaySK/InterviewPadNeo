import React, { useState, createContext } from 'react'

export const CodeContext = createContext();

function CodeContextProvider(props) {
    const [code, setCode] = useState("# Enter the code here");
    const [codeOptions, setCodeOptions] = useState({ language: "Python", input: "", output: "" });

    const updateCode = (newCode) => {
        setCode(newCode);
    }

    const updateLanguage = (newLang) => {
        setCodeOptions({ ...codeOptions, language: newLang });
    }

    const updateInput = (newInput) => {
        setCodeOptions({ ...codeOptions, input: newInput });
    }

    const updateOutput = (newOutput) => {
        setCodeOptions({ ...codeOptions, output: newOutput })
    }

    return (
        <CodeContext.Provider
            value={
                {
                    code,
                    codeOptions,
                    updateCode,
                    updateInput,
                    updateOutput,
                    updateLanguage
                }
            }>
            {props.children}
        </CodeContext.Provider>
    )
}

export default CodeContextProvider
