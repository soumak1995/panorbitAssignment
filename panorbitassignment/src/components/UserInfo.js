import React from 'react'
import '../css/UserInfo.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));
function UserInfo({user}) {
    console.log(user)
    const classes = useStyles();
    return (
        <>
        <div className="container1">
            
         <div className="UserInfo">
               <Avatar src={user?.profilepicture} alt={user?.name}  className={classes.large} />
            <p className="UserInfo__name">{user?.name}</p>
            <section className="UserInfo__Section">
         
          
          < p><span className="UserInfo__lable">Username :</span>{user?.username}</p>  
  
            <p><span className="UserInfo__lable">e-mail :</span> {user?.email}</p> 
              
               <p> <span className="UserInfo__lable">Phone :</span>{user?.phone}</p>
           
              <p> <span className="UserInfo__lable">Website :</span>{user?.website}</p>
               
                </section> 
            
               </div>
               
                <div className="company__info">
               <p className="company__info_header">Company</p>
             < p><span className="UserInfo__lable">Name :</span>{user?.company?.name}</p>  
  
             <p><span className="UserInfo__lable">catchphrase :</span> {user?.company?.catchPhrase}</p> 
    
              <p> <span className="UserInfo__lable">bs :</span>{user?.company?.bs}</p>

           </div>
        </div>
       
        </>
    )
}

export default UserInfo
