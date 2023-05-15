import React, { useContext } from 'react'
import { UserNameContext, UserIdContext } from '../../admin/AppContext'

const UseContext = () => {
    const name = useContext(UserNameContext)
    const id = useContext(UserIdContext)

    return (
        <div className='text-4xl text-center font-bold bg-slate-200 text-gray-700 py-2 px-3 rounded-sm m-5'>
            My name is
            <span className='text-cyan-700'> {name} </span>
            and Id is
            <span className='text-sky-500'> {id} </span>
        </div>
    )
}

export default UseContext