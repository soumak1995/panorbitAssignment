import React from 'react'
import '../css/ProfileBody.css';
import UserInfo from '../components/UserInfo'
import Address from '../components/Address'
function ProfileBody() {
    return (
        <div className="ProfileBody">
            <UserInfo/>
            <Address/>
        </div>
    )
}

export default ProfileBody

