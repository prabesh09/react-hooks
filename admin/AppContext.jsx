import React, { createContext } from 'react'
import ChildContent from './contents/ChildContent'

const UserNameContext = createContext()
const UserIdContext = createContext()

const AppContext = () => {
    const name = "Atomic"
    const id = "056"

    return (
        <UserNameContext.Provider value={name}>
            <UserIdContext.Provider value={id}>
                <ChildContent />
            </UserIdContext.Provider>
        </UserNameContext.Provider>
    )
}

export default AppContext
export { UserNameContext, UserIdContext } 