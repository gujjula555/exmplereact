import React from 'react'
import { useLocation } from 'react-router-dom'
export const Service1 = () => {
    const data = useLocation()
    const { from, to } = data.state
    console.log("Service" + from && from)
    console.log("Service1" + to && to)
    return (
        <div>
            <input type="text" placeholder='name'></input>
            <input type="text" placeholder='user name'></input>
            <input type="text" placeholder='email'></input>
            <input type="text" placeholder='age'></input>
            <input type="text" placeholder='password'></input>

        </div>
    )
}