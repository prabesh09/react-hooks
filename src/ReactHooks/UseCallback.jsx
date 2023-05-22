import React, { useState, useCallback } from 'react';

function App() {
    const [count, setCount] = useState(0);

    // Define a callback function using useCallback
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div className='text-center '>
            <h1 className='text-3xl'>Count: {count}</h1>
            <button className='bg-blue-500 py-1 px-3 text-white m-3' onClick={increment}>Increment</button>
        </div>
    );
}

export default App;
