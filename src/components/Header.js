import React,{useEffect, useState} from 'react'
import '../css/Header.css';
import Avatar from '@material-ui/core/Avatar';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/styles';
import UserList from './UserList'
import UserListModal from '../components/UserListModal'
import {useParams,useLocation,useHistory} from 'react-router-dom'
Modal.setAppElement('#root');
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));
function Header({users}) {
    const classes = useStyles();
    let location = useLocation();
    const {id}=useParams();
    const History=useHistory();
   const user= users?.filter((person) => person.id === parseInt(id,10))[0]
    const [modalIsOpen,setModalIsOpen]=useState(false);
    const closemodal=()=>{
        setModalIsOpen(false)
      }
      const openModal=()=>{
        setModalIsOpen(true)
      }
      const twoUser=users?.slice(0,2);
    return (
        <>
        <div className="Header">

           <h4 className="Header__title">{location.pathname}</h4>
            <div className="Header__profInfo" onClick={openModal}>
            <Avatar  src={user?.profilepicture} alt={user?.name}/>
          <small className="Header__profName">{user?.name}</small>
            </div>
            
        </div>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closemodal}
          className="Modal"
             overlayClassName="Overlay">
                    <section className="Modal__layout">
                        <Avatar src={user?.profilepicture} alt={user?.name}  className={classes.large} />
                        <article className="Modal__layout__article">
                                <p>{user?.name}</p>
                                 <p>{user?.email}</p>
                        </article>
                        
                    </section>
                    
                    {
                        twoUser?.map(user=>
                            <section className="Modal__layout">
                                <UserListModal
                            profilepicture={user?. profilepicture}
                            username={user?.name}
                            id={user?.id}/>
                             </section>)
                    }
                       
                    
                    <button onClick={()=>History.push('/')}>Sign out</button>
          </Modal>
          </>
    )
}

export default Header
