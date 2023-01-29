import React from 'react';
import './static-map.styles.css'

// Import from react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'




export const StaticMap = ({position}) => (
    <MapContainer 
        className="map" 
        center={position} 
        zoom={15} 
        scrollWheelZoom={false}
        minZoom={5}
        maxZoom={18}
    >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // default: https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
            // opção com relevo: https://tile.osm.ch/switzerland/{z}/{x}/{y}.png
            // opção do dynamic-map: https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png
        />
        <Marker position={position}>
            <Popup>
               <b>Fundação Getúlio Vargas - FGV</b>     <br/> 
               Edifício Luiz Simões Lopes (Sede - 11º andar) <br/>
               R. Praia de Botafogo 190, Botafogo, Rio de Janeiro - RJ <br/>
               CEP: 22250-900
            </Popup>
        </Marker>
    </MapContainer>
);