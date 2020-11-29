import React from 'react'
import '../css/ProfilePage.css'
import NavBar from '../components/NavBar'
import Header from '../components/Header';
import ProfileBody from '../components/ProfileBody'
function ProfilePage() {
    return (
        <div className="container">
            <div className="container__navbar">
               <NavBar/>
            </div>
         <div className="container__header">
           <Header/>
           <ProfileBody/>
         </div>
          
        </div>
    )
}

export default ProfilePage
