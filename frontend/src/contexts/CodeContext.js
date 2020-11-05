import React, { useState, useEffect, createContext } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:5000');
export const CodeContext = createContext();

function CodeContextProvider(props) {
    const [code, setCode] = useState("# Enter the code here");
    const [codeOptions, setCodeOptions] = useState({ language: "Python", input: "", output: "" });

    const updateCode = (newCode) => {
        setCode(newCode);
        socket.emit('codeChange', { newCode });
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

    useEffect(() => {
        socket.on('codeChange', ({ newCode }) => {
            setCode(newCode);
        })
    }, []);

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
