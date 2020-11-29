import React from 'react'
import {SidebarData} from '../sidebarData'
import {Link} from 'react-router-dom'
import '../css/NavBar.css'
function NavBar() {
    return (
        <nav className="navbar">
            <ul style={{listStyleType:'none'}}>
                {SidebarData.map((item,index)=>(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                         <span>{item.title}</span>
                        </Link>
                        <hr/>
                    </li>
                ))}
                <li className="nav-item">
                <Link  to="/ToDo">
                   <span>ToDo</span>
                </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar
