import React, {useState, createContext, useEffect} from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5001');
export const DrawingContext = createContext();

export default function DrawingContextProvider(props){
    const [drawOperation, setDrawOperation] = useState([]);

    const updateDrawboard = (newOperation) => {
        socket.emit('drawChange',{ newOperation });
        //console.log('operationsAfter',operationsAfter,{ ...operationsAfter })
        setDrawOperation(prevState => [...prevState, newOperation]);
    }

    useEffect(() => {
        console.log('use effect change')
        socket.on('drawChange',({newOperation})=>{
            setDrawOperation(prevState => [...prevState, newOperation]);
        });
    },[]);

    return (
        <DrawingContext.Provider
            value = {
                {
                    drawOperation,
                    updateDrawboard,
                }
            }
        >
            {props.children}
        </DrawingContext.Provider>
    );
    
}