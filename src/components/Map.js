import React,{useEffect, useState} from 'react';
import '../css/Maps.css'
import {Map as LeafletMap,TileLayer} from "react-leaflet"
function Maps({geo}) {
    const [mapCenter,setMapcenter]=useState([-37.3159,81.1496])
    const[mapZoom,setMapZoom]=useState(3);
    let lat=45.4;
    let lng=-75.7;
    console.log(isNaN(geo?.lat) ,isNaN(geo?.lng))
    if(!isNaN(geo?.lat) && !isNaN(geo?.lng) ){
       
        lat=geo?.lat;
        lng=geo?.lng
    }
    return (
        <div className="map">
            <LeafletMap center={[lat,lng]} zoom={6}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy;<a href="http://osm.org/copyright">OpenstreetMap<a/>contributors'
                />
            </LeafletMap>
            <div className="map__cord">
    <p className="map__cord__para"><small className="map__cord__label">Lat :</small>{geo?.lat}</p>
    <p className="map__cord__para"><small className="map__cord__label">Long :</small>{geo?.lng}</p>
            </div>
            
        </div>
    )
}

export default Maps
