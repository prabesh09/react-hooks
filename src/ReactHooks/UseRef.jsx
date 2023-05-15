import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const count = useRef(10)
    const inputRef = useRef()

    const [value, setValue] = useState("Input will appear here...")

    useEffect(() => {
        count.current += 1
    })

    const updateTextHandler = (event) => {
        setValue(event.target.value)
    }

    const changeBackground = () => {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "pink"
    }

    return (
        <div className='flex justify-center flex-col text-center'>
            <input placeholder='Enter text...' onChange={updateTextHandler} ref={inputRef} type="text" className='bg-violet-500 mx-10 h-10 text-white text-3xl px-5 py-7 rounded-lg placeholder-white' />
            <button onClick={changeBackground} className='bg-blue-500 px-5 py-3 w-24 mx-auto my-5 text-white rounded-xl'>submit</button>
            <span className='mt-3 font-bold text-3xl text-sky-600'>Text: {value}</span>
            <p className='font-bold text-2xl my-5'>
                The number of times this component has been rendered: {count.current}
            </p>
        </div>
    )
}

export default UseRef