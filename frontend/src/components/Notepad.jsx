import React from 'react'
import './Notepad.css'
import DrawingBoard from 'react-drawing-board';
import {DrawingContext} from '../contexts/DrawingContext'
import { useContext } from 'react';

function Notepad() {

    const {drawOperation, updateDrawboard} = useContext(DrawingContext);

    return (
            <DrawingBoard
                userId="user1" 
                style={{width:"500px"}}
                operations = {drawOperation}
                onChange = {(newOperation,_) =>{
                    console.log('manual change',newOperation)
                    updateDrawboard(newOperation);
                }}
                toolbarPlacement = {"right"}
            />
    ) 
}

export default Notepad;
