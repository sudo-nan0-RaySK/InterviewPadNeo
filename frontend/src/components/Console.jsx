import React, { useContext, useState } from 'react';
import { Button } from 'popcom';
import { CodeContext } from '../contexts/CodeContext';
import { callRCE } from '../API/requests';
import './Console.css';

function Console() {
    const {
        updateInput,
        updateOutput,
        code,
        codeOptions
    } = useContext(CodeContext);

    const [isEnabled, setEnabled] = useState(true);

    const onInputChangedHandler = (evt) => {
        updateInput(evt.target.value);
    }

    const onRunClikedHandler = async () => {
        // Axios call goes here! and run btn is diabled
        console.log('Button clicked')
        setEnabled(false);
        let response = await callRCE({ code, ...codeOptions });
        console.log(response)
        updateOutput(response.obtainedOutput);
        setEnabled(true);
    }

    return (
        <div className="io-container">
            <div className="console-box">
                <div className="input-box in-box">
                    <h3>Input:</h3> <br />
                    <div className="spacer"></div>
                    <textarea onChange={onInputChangedHandler} name="inp" id="inp" rows="5" cols="25" ></textarea>
                </div>
                <div className="input-box ">
                    <h3>Output:</h3> <br />
                    <div className="spacer"></div>
                    <textarea value={codeOptions.output} name="inp" id="inp" rows="5" cols="25" readOnly="true"></textarea>
                </div>
            </div>
            <div className="run-ctrl theme-default">
                <Button variant="success"
                    onClick={onRunClikedHandler}
                    disabled={!isEnabled}>
                    {isEnabled ? "Run Code" : "Running..."}
                </Button>
                <Button variant="warning"> Clear Code</Button>
            </div>
        </div>
    )
}

export default Console
