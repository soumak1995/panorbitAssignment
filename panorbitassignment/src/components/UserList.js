import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/UserList.css'
import {Link} from 'react-router-dom'
function UserList({profilepicture,username,id}) {
    return (
        <>
         <Link to={`/Profile/${id}`} className="UserList__link">
         <div className="UserList">
         <Avatar className="UserList__avatar" src={profilepicture} alt={username}/>
            <h6 className="UserList__info">{username}</h6>
         </div>
         </Link>
        </>    
       
        
    )
}

export default UserList
