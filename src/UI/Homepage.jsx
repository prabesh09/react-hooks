import React from 'react'
import Title from './Title'
import UseState from '../ReactHooks/UseState'
import UseEffect from '../ReactHooks/UseEffect'
import UseContext from '../ReactHooks/UseContext'
import AppContext from '../../admin/AppContext'
import UseReducer from '../ReactHooks/UseReducer'

const Homepage = () => {
    return (
        <>
            <Title name="UseState" />
            <UseState />

            <Title name="UseEffect" />
            <UseEffect />

            <Title name="UseContext" />
            <AppContext />

            <Title name="UseReducer" />
            <UseReducer />
        </>
    )
}

export default Homepage