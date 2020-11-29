import React,{useState} from 'react'
import '../css/card.css'
import UserList from './UserList'
function Cards() {
   const intialState=[{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
       
        },{
            id: 2,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
           
            },
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz"
               
                },{
                    id: 2,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz"
                   
                    },{
                        id: 1,
                        name: "Leanne Graham",
                        username: "Bret",
                        email: "Sincere@april.biz"
                       
                        },{
                            id: 2,
                            name: "Leanne Graham",
                            username: "Bret",
                            email: "Sincere@april.biz"
                           
                            },
                        {
                            id: 3,
                            name: "Leanne Graham",
                            username: "Bret",
                            email: "Sincere@april.biz"
                           
                            },{
                                id: 2,
                                name: "Leanne Graham",
                                username: "Bret",
                                email: "Sincere@april.biz"
                               
                                }
                            ]
     const [user,setUser]=useState(intialState);
     
    return (
        <div className="card">
            <div className="card__header">
                <h5>Select an account</h5>
            </div>
           <div className="card__list__container">
               {user.map(m=><UserList/>)}
           </div>
           <div className="card__footer">
           </div>
        </div>
        
    )
}

export default Cards
