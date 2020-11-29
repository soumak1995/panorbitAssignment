import React,{useState} from 'react'
import '../css/Header.css';
import Avatar from '@material-ui/core/Avatar';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/styles';
import UserList from './UserList'
import UserListModal from '../components/UserListModal'
Modal.setAppElement('#root');
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));
function Header() {
    const [modalIsOpen,setModalIsOpen]=useState(true);
    const closemodal=()=>{
        setModalIsOpen(false)
      }
      const classes = useStyles();
    return (
        <>
        <div className="Header">

            <h4 className="Header__title">Post</h4>
            <div className="Header__profInfo">
            <Avatar/>
            <span className="Header__profName">Soumak</span>
            </div>
            
        </div>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closemodal}
          className="Modal"
             overlayClassName="Overlay">
                    <section className="Modal__layout">
                        <Avatar alt="Remy Sharp"  className={classes.large} />
                        <article className="Modal__layout__article">
                                <p>soumak maji</p>
                                <p>soumakmaji@gmail.com</p>
                        </article>
                        
                    </section>
                    <section className="Modal__layout">
                        <UserListModal/>
                        </section>
                        <section className="Modal__layout__withoutBorder">
                        <UserListModal/>
                        </section>
                    
                    <button>Sign out</button>
          </Modal>
          </>
    )
}

export default Header
