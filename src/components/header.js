import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    const names = ["first","second","thired"]
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/redirect">redirect</Link></li>
                {
                    names.map((item)=>(
                        <li><Link to={`/blog/${item}`} state={{ from: "category" , to:item}}> Next Step </Link></li>
                    ))
                }
            </ul>
        </>
    )
}