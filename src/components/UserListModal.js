import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/UserListModal.css';
import {Link} from 'react-router-dom';
import {selectedData} from '../Redux/ActionCreators';
import{connect} from 'react-redux';
const mapDispatchToProps = dispatch => ({
    addSelectedData: (user) =>  dispatch(selectedData(user))
  });
function UserListModal({profilepicture,username,id,user,addSelectedData}) {
    const addData=e=>{
      e.preventDefault();
      addSelectedData(user)
    }
    return (
        <Link to={`/Profile/${id}`} className="UserList__link">
            <div className="UserListModal__container" onClick={addData}>
            <Avatar src={profilepicture} alt={username} className="UserListModal__container__avatar"/>
            <small className="UserListModal__container__info">{username}</small>
        </div>
        </Link>
        
    )
}
export default connect(null,mapDispatchToProps)(UserListModal)

