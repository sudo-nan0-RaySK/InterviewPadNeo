import React from 'react'
import { Button } from 'popcom'
import './Console.css'

function Console() {
    return (
        <div className="io-container">
            <div className="console">
                <div className="input-box in-box">
                    <h3>Input:</h3> <br />
                    <div className="spacer"></div>
                    <textarea name="inp" id="inp" cols="20" rows="5"></textarea>
                </div>
                <div className="input-box ">
                    <h3>Output:</h3> <br />
                    <div className="spacer"></div>
                    <textarea name="inp" id="inp" cols="20" rows="5" contentEditable="false"></textarea>
                </div>
            </div>
            <div className="run-ctrl theme-default">
                <Button variant="success"> Run Code</Button>
                <Button variant="warning"> Clear Code</Button>
            </div>
        </div>
    )
}

export default Console
