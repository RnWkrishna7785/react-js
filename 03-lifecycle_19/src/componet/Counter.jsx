 import React, { useEffect, useState } from 'react';

let Counter=React.memo(({ data }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    useEffect(() => {
        console.log(data);
        console.log("only callback function:everytime ")
    });
    useEffect(() => {
        console.log("callback function with empty array:1st time load ")
    },[]);
    useEffect(() => {
        console.log("callback function with state array:count's state change ")
    },[count]);
    useEffect(() => {
        return () => {
            console.log("callback with return:comonet unmount ")
            
        };
    },[]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
});

export default Counter ;