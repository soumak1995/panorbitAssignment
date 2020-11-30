import React,{useState} from 'react'
import '../css/card.css'
import UserList from './UserList'
function Cards({users}) {

     console.log(users)
    return (
        <div className="card">
            <div className="card__header">
                <h5>Select an account</h5>
            </div>
           <div className="card__list__container">
               {users?.map((m,index)=><UserList key={index} 
               profilepicture={m.profilepicture} 
               username={m.name}
               id={m.id}/>)}
           </div>
           <div className="card__footer">
           </div>
        </div>
        
    )
}

export default Cards
