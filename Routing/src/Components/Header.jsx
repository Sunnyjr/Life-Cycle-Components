import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header style={{backgroundColor:"light-blue",margin:"10px", height:"300px"}}>
                <h1>Component Life Cycle</h1>
                <div className="links"> 
                <Link to="/" id="mounting" >Mounting</Link>
                <Link to="/updating" id="updatng">Updating</Link>
                <Link to="/unmounting" id="unmounting">Unmounting</Link>
                </div>
            </header>
        </div>
    )
}

export default Header