import React,{useEffect, useState} from 'react'
import '../css/Header.css';
import Avatar from '@material-ui/core/Avatar';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/styles';
import UserList from './UserList'
import UserListModal from '../components/UserListModal'
import {useParams,useLocation,useHistory} from 'react-router-dom';
import{connect} from 'react-redux';
Modal.setAppElement('#root');
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));
 
  const mapStateToProps = state => {
    return {
      data: state.data,
      selectedData:state.selectedData
    }
  }
function Header({data,selectedData}) {
    const classes = useStyles();
    let location = useLocation();
    const History=useHistory();
    const [modalIsOpen,setModalIsOpen]=useState(false);
    const closemodal=()=>{
        setModalIsOpen(false)
      }
      const openModal=()=>{
        setModalIsOpen(true)
      }
      const twoUser=data?.users?.slice(0,2);
    return (
        <>
        <div className="Header">

           <h4 className="Header__title">{location.pathname}</h4>
            <div className="Header__profInfo" onClick={openModal}>
            <Avatar  src={selectedData?.profilepicture} alt={selectedData?.name}/>
          <small className="Header__profName">{selectedData?.name}</small>
            </div>
            
        </div>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closemodal}
          className="Modal"
             overlayClassName="Overlay">
                    <section className="Modal__layout">
                        <Avatar src={selectedData?.profilepicture} alt={selectedData?.name}  className={classes.large} />
                        <article className="Modal__layout__article">
                                <p>{selectedData?.name}</p>
                                 <p>{selectedData?.email}</p>
                        </article>
                        
                    </section>
                    
                    {
                        twoUser?.map((user,index)=>
                            <section className="Modal__layout">
                                <UserListModal
                                  key={index}
                                  profilepicture={user?. profilepicture}
                                  username={user?.name}
                                  id={user?.id}
                                  user={user}/>
                             </section>)
                    }
                       
                    
                    <button onClick={()=>History.push('/')}>Sign out</button>
          </Modal>
          </>
    )
}

export default connect(mapStateToProps)(Header)
