import React,{useState} from 'react';
import '../css/Maps.css'
import {Map as LeafletMap,TileLayer} from "react-leaflet"
function Maps() {
    const [mapCenter,setMapcenter]=useState({lat:-37.3159,lng:81.1496})
    const[mapZoom,setMapZoom]=useState(3);
    return (
        <div className="map">
            <LeafletMap center={[45.4, -75.7]} zoom={12}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy;<a href="http://osm.org/copyright">OpenstreetMap<a/>contributors'
                />
            </LeafletMap>
            <div className="map__cord">
                <p className="map__cord__para"><small className="map__cord__label">Lat :</small>-37.3159</p>
                <p className="map__cord__para"><small className="map__cord__label">Long :</small>-37.3159</p>
            </div>
            
        </div>
    )
}

export default Maps
