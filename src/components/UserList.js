import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/UserList.css'
function UserList() {
    return (
        <div className="UserList">
            <Avatar className="UserList__avatar"/>
             <h6 className="UserList__info">Name Of the</h6>
        </div>
        
    )
}

export default UserList
