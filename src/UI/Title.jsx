import React from 'react'

const Title = (props) => {
    return (
        <div className='bg-slate-700 rounded m-5 text-center p-3 text-3xl font-semibold text-white'>
            {props.name}
        </div>
    )
}

export default Title