import React, { useReducer } from 'react'

const UseReducer = () => {
    const initialValue = 0

    const reducer = (state, action) => {
        if (action.type === "increase") {
            return state + 1
        }
        if (action.type === "decrease" && state !== 0) {
            return state - 1
        }
        return state
    }


    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <div className='flex justify-center gap-5 items-center my-10'>
            <button className='bg-lime-500 p-2 text-white rounded-lg text-xl' onClick={() => dispatch({ type: "decrease" })}>Decrement</button>
            <span className='text-3xl font-bold text-sky-400'>{state}</span>
            <button className='bg-lime-500 p-2 text-white rounded-lg text-xl' onClick={() => dispatch({ type: "increase" })}>Increment</button>
        </div >
    )
}

export default UseReducer