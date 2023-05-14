import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [title, setTitle] = useState("React Hooks")
    const [text, setText] = useState(null)

    useEffect(() => {
        document.title = title
    })

    return (
        <div className='flex justify-center gap-4'>
            <input className='bg-zinc-500 outline-red-500 text-white px-4 py-2 text-2xl rounded-xl' placeholder='This will update Title' type="text" onChange={(event) => setText(event.target.value)} />
            <button className='px-4 py-2 bg-cyan-500 text-white rounded-xl' onClick={() => { setTitle(text) }}>Update Title</button>
        </div>
    )
}

export default UseEffect