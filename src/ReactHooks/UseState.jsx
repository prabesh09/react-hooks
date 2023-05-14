import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)

    return (
        <div className='my-10 flex items-center justify-center gap-10'>
            <button onClick={() => { count === 0 ? setCount(0) : setCount(count - 1) }} className='bg-blue-500 rounded-lg p-5 text-3xl text-white w-20 aspect-square'>-</ button >
            <span className='text-5xl'>{count}</span>
            <button onClick={() => { setCount(count + 1) }} className='bg-blue-500 rounded-lg p-5 text-3xl text-white w-20 aspect-square'>+</button>
        </div>
    )
}

export default UseState