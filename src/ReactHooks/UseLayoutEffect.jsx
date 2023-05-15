import React, { useLayoutEffect, useState } from 'react'

const UseLayoutEffect = () => {

    const [random, setRandom] = useState(0)

    useLayoutEffect(() => {
        if (random === 0) {
            setRandom(Math.floor(Math.random() * 1000))
        }
    })

    return (
        <div className='text-3xl text-center'>
            <span>{random}</span>
            <button className='bg-slate-500 mx-5 text-white px-3' onClick={() => setRandom(0)}>random number</button>
        </div>
    )
}

export default UseLayoutEffect