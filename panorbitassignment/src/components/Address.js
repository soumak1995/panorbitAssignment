import React from 'react'
import '../css/Address.css';
import Maps from './Map'
function Address({user}) {
    console.log(user)
    return (
      
        <div className="Address">
             <span className="Address__info__span">Address:</span>
             <div className="Address__info">
    <p><span className="Address__info__span">Street :</span> {user?.address?.street}</p>
                    <p><span className="Address__info__span">Suite :</span> {user?.address?.suite}</p>
                    <p><span className="Address__info__span">City :</span> {user?.address?.city}</p>
                    <p><span className="Address__info__span">Zipcode :</span> {user?.address?.zipcode}</p>
             </div>
            <div className="Address__map">
                <Maps geo={user?.address?.geo}/>
            </div>
            
        </div>
    )
}

export default Address
