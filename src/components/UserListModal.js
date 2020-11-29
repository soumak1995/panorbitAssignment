import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/UserListModal.css';
import {Link} from 'react-router-dom'
function UserListModal({profilepicture,username,id}) {
    return (
        <Link to={`/Profile/${id}`} className="UserList__link">
            <div className="UserListModal__container">
            <Avatar src={profilepicture} alt={username} className="UserListModal__container__avatar"/>
            <small className="UserListModal__container__info">{username}</small>
        </div>
        </Link>
        
    )
}

export default UserListModal
