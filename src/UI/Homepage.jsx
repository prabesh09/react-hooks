import React from 'react'
import Title from './Title'
import UseState from '../ReactHooks/UseState'
import UseEffect from '../ReactHooks/UseEffect'
import UseContext from '../ReactHooks/UseContext'
import AppContext from '../../admin/AppContext'
import UseReducer from '../ReactHooks/UseReducer'
import UseRef from '../ReactHooks/UseRef'
import UseLayoutEffect from '../ReactHooks/UseLayoutEffect'
import UseMemo from '../ReactHooks/UseMemo'
import UseCallback from '../ReactHooks/UseCallback'

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

            <Title name="UseRef" />
            <UseRef />

            <Title name="UseLayoutEffect" />
            <UseLayoutEffect />

            <Title name="UseMemo" />
            <UseMemo />

            <Title name="UseCallback" />
            <UseCallback />
        </>
    )
}

export default Homepage