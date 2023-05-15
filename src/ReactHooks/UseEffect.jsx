import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [title, setTitle] = useState("React Hooks")
    const [text, setText] = useState(null)

    const [widthSize, setWidthSize] = useState(window.innerWidth)

    const updateScreenSize = () => {
        setWidthSize(() => window.innerWidth)
    }

    useEffect(() => {
        document.title = `(${widthSize}) ${title}`
        window.addEventListener("resize", updateScreenSize)
        return () => {
            window.removeEventListener("resize", updateScreenSize)
        }
    }, [title, updateScreenSize])

    return (
        <>
            <div className='flex justify-center gap-4'>
                <input className='bg-zinc-500 outline-red-500 text-white px-4 py-2 text-2xl rounded-xl' placeholder='This will update Title' type="text" onChange={(event) => setText(event.target.value)} />
                <button className='px-4 py-2 bg-cyan-500 text-white rounded-xl' onClick={() => { setTitle(text) }}>Update Title</button>
            </div>

            <h1 className='text-center my-5 text-5xl font-bold'>
                This value updates on resize <span className='text-cyan-500'>{widthSize}</span>
            </h1>
        </>
    )
}

export default UseEffect