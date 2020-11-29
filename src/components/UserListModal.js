import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/UserListModal.css'
function UserListModal() {
    return (
        <div className="UserListModal__container">
            <Avatar className="UserListModal__container__avatar"/>
             <small className="UserListModal__container__info">Name Of the</small>
        </div>
    )
}

export default UserListModal
