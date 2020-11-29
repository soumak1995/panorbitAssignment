import React from 'react'
import '../css/Header.css';
import Avatar from '@material-ui/core/Avatar';
function Header() {
    return (
        <div className="Header">

            <h4 className="Header__title">Post</h4>
            <div className="Header__profInfo">
            <Avatar/>
            <span className="Header__profName">Soumak</span>
            </div>
            
        </div>
    )
}

export default Header
