import React from 'react'

const Title = (props) => {
    return (
        <div className='bg-slate-500 rounded-xl m-5 text-center p-3 text-3xl text-white'>
            {props.name}
        </div>
    )
}

export default Title