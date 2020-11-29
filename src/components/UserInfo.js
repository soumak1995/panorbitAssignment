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
function UserInfo() {
    const classes = useStyles();
    return (
        <>
        <div className="container1">
            
         <div className="UserInfo">
               <Avatar alt="Remy Sharp"  className={classes.large} />
              <h4 >Soumak Maji</h4>
            <section className="UserInfo__Section">
         
          
             < p><span className="UserInfo__lable">Username :</span>Bret</p>  
  
            <p><span className="UserInfo__lable">e-mail :</span> soumakamji@gmail.com</p> 
              
           <p> <span className="UserInfo__lable">Phone :</span>9789668756</p>
           
           <p> <span className="UserInfo__lable">Website :</span>ghjgjhkjhkj.com</p>
               
                </section> 
            
               </div>
               
                <div className="company__info">
                    <p className="company__info_header">Company</p>
                    < p><span className="UserInfo__lable">Name :</span>Romaguer-Crona</p>  
  
                    <p><span className="UserInfo__lable">catchphrase :</span> Multi-layered <br/> Client-server neural</p> 
    
                    <p> <span className="UserInfo__lable">bs :</span>harness real-time e-markets</p>

           </div>
        </div>
       
        </>
    )
}

export default UserInfo
