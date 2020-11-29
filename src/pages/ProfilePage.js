import React from 'react'
import '../css/ProfilePage.css'
import NavBar from '../components/NavBar'
import Header from '../components/Header';
import ProfileBody from '../components/ProfileBody'
import Posts from '../components/Posts'
import DeshBoard from '../components/Dashboard'
import {BrowserRouter,Switch, Route, 
    Redirect, withRouter, Router} from 'react-router-dom'
function ProfilePage() {
    return (
        <div >
            <Switch>
               <Route path='/' exact component={DeshBoard} />
                <Route path='/Profile' exact>
                    <div className="container">
                        <div className="container__navbar">
                            <NavBar/>
                        </div>
                        <div className="container__header">
                                    <Header/>
                                    <ProfileBody/>
                        </div>
                    </div>
                    
                </Route>
                <Route path='/Posts' exact>
                <div className="container">
                    <div className="container__navbar">
                         <NavBar/>
                     </div>
                     <div className="container__header">
                                <Header/>
                                <Posts/>
                    </div>
                    </div>
                </Route>
                <Route path='/Gallery' exact>
                <div className="container">
                    <div className="container__navbar">
                         <NavBar/>
                     </div>
                     <div className="container__header">
                                <Header/>
                                <Posts/>
                    </div>
                    </div>
                </Route>
                <Route path='/ToDo' exact>
                        <div className="container">
                            <div className="container__navbar">
                                <NavBar/>
                            </div>
                            <div className="container__header">
                                        <Header/>
                                        <Posts/>
                            </div>
                            </div>
                </Route>
            </Switch>
            
        
        </div>
    )
}

export default ProfilePage
