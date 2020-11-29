import React,{useEffect} from 'react'
import '../css/ProfilePage.css'
import NavBar from '../components/NavBar'
import Header from '../components/Header';
import ProfileBody from '../components/ProfileBody'
import Posts from '../components/Posts';
import Gallery from '../components/Gallery';
import ToDo from '../components/ToDo'
import DeshBoard from '../components/Dashboard'
import {BrowserRouter,Switch, Route, 
    Redirect, withRouter, Router} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchData} from '../Redux/ActionCreators'
const mapStateToProps = state => {
    return {
      data: state.data,
      selectedData:state.selectedData
    }
  }
  const mapDispatchToProps = dispatch => ({
    fetchData: () => { dispatch(fetchData())},
    
  });
function ProfilePage(props) {
    useEffect(()=>{
        props.fetchData()
    },[]);
    console.log(props)
    return (
        <div >
          
            <Switch>
               <Route path='/' exact component={()=><DeshBoard users={props?.data?.users}/>} />
                <Route path='/Profile/:id' >
                    <div className="container">
                        <div className="container__navbar">
                            <NavBar selectedData={props.selectedData}/>
                        </div>
                        <div className="container__header">
                                  <Header users={props?.data?.users}/>
                                 <ProfileBody users={props?.data?.users}/>
                        </div>
                    </div>
                    
                </Route>
                <Route path='/Posts' exact>
                <div className="container">
                    <div className="container__navbar">
                         <NavBar  selectedData={props.selectedData}/>
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
                         <NavBar  selectedData={props.selectedData}/>
                     </div>
                     <div className="container__header">
                                <Header/>
                                <Gallery/>
                    </div>
                    </div>
                </Route>
                <Route path='/ToDo' exact>
                        <div className="container">
                            <div className="container__navbar">
                                <NavBar  selectedData={props.selectedData}/>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfilePage)) 
