import React from 'react'
import UseState from '../ReactHooks/UseState'
import Title from './Title'
import UseEffect from '../ReactHooks/UseEffect'

const Homepage = () => {
    return (
        <>
            <Title name="UseState" />
            <UseState />

            <Title name="UseEffect" />
            <UseEffect />
        </>
    )
}

export default Homepage