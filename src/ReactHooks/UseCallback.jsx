import React, { useCallback, useState } from 'react'

const UseCallback = () => {
    const [count, setCount] = useState(1)
    const [todo, setTodo] = useState(["New Entry x0"])

    const increment = () => {
        setCount(count + 1)
    }


    const updateTodo = useCallback(() => {
        setTodo([...todo, `New Entry x${count}`])
        console.log("child render")
    }, [todo])

    return (
        <div className='text-center'>
            {todo.map((value, index) => (
                <h1 key={index} className='bg-blue-400 m-3 text-white p-2'>{value}</h1>
            ))
            }
            <button className='bg-pink-500 text-white px-5 py-3 rounded-xl' onClick={updateTodo}>Add New Todo</button>
            <br />
            <span className='text-2xl'>{count} </span>
            <button className='bg-cyan-500 my-2 text-white p-3' onClick={increment}>Update Count</button>
        </div>
    )
}

export default UseCallback