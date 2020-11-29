import React from 'react'
import '../css/Address.css';
import Maps from './Map'
function Address() {
    return (
      
        <div className="Address">
             <span className="Address__info__span">Address:</span>
             <div className="Address__info">
                    <p><span className="Address__info__span">Street :</span> Kulas light</p>
                    <p><span className="Address__info__span">Suite :</span> Apt. 556</p>
                    <p><span className="Address__info__span">City :</span> Gwenborough</p>
                    <p><span className="Address__info__span">Zipcode :</span> 92998-3874</p>
             </div>
            <div className="Address__map">
                <Maps/>
            </div>
            
        </div>
    )
}

export default Address
