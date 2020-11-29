import React from 'react'
import {SidebarData} from '../sidebarData'
import {Link,useParams} from 'react-router-dom'
import '../css/NavBar.css';
import { selectedData } from '../Redux/ActionCreators';

function NavBar({selectedData}) {
const id=selectedData?.id;
    return (
        <nav className="navbar">

            <ul style={{listStyleType:'none'}}>
                <li className="nav-item">
                    <Link  to={`/Profile/${id}`}>
                    <span>Profile</span>
                    </Link>
                    <hr/>
                </li>
            
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
