import React, { Component } from 'react';
import './dynamic-map.styles.css';

// React-DOM server
import { renderToStaticMarkup } from 'react-dom/server';

// Import from react-leaflet
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

// leaflet
import { divIcon } from 'leaflet';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalSymbol } from '@fortawesome/free-solid-svg-icons'

// import ChangeMapView from '../change-map-view/change-map-view.component';




class DynamicMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            zoom: 12,
            map: null
        }
    }

    flyToLocation = (pos) => {
        // this.setState({position: pos});
        const { map, zoom } = this.state;
        if (map) map.flyTo(pos, zoom);
    }


    componentDidUpdate() {
        this.flyToLocation(this.props.position)
    }


    render() {
        const { position, activeRadius, info_cep, hospitalsData } = this.props;  // retirei cepValidado, cep
        const iconMarkup = renderToStaticMarkup(
            <FontAwesomeIcon 
                icon={faHospitalSymbol} 
                size="lg"
                style={{
                    'color':'#9b2226',  // vermelho: #9b2226
                    'opacity':'0.8', 
                }}
            />
        );
        
        const customMarkerIcon = divIcon({
            html: iconMarkup,
        });

        // console.log(hospitalsData)

        return (
            <MapContainer
                className="dynamic-map"
                center={position}
                zoom={this.state.zoom}
                scrollWheelZoom={false}
                whenCreated={map => this.setState({ map })}
                maxZoom={18}
                minZoom={8}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    // default: https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
                    // custom: https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}
                    // custom 2: https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png
                    // custom 3: https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png
                />
                <Marker position={position} size='lg'>
                    <Popup>
                        Você está aqui! <br />
                        {position[0]} {position[1]} <br />
                        CEP: {info_cep.cep} <br />
                        UF: {info_cep.uf} <br />
                        Cidade: {info_cep.localidade} <br />
                        Bairro: {info_cep.bairro} <br />
                        Logradouro: {info_cep.logradouro} <br />
                    </Popup>
                </Marker>
                
                { hospitalsData ? hospitalsData.map((r, idx) =>{
                    const pos = [parseFloat(r.lat_position), parseFloat(r.lng_position)]
                    return(
                        <Marker 
                            key={`marker-${idx}`} 
                            position={pos}
                            icon={customMarkerIcon}
                        >
                            <Popup>
                                {pos[0]} {pos[1]} <br />
                                {r.ESTABELECIMENTO}<br />
                                Endereço: {r.ENDERECO} <br />
                            </Popup>
                        </Marker>
                    )
                }) : null}

                {/* OBS: removi ChangeMapView pois agora estou usando flyto */}
                {/* <ChangeMapView coords={position} /> */}
                <Circle center={position} pathOptions={{ 'color': 'black' , 'opacity': '0.5'}} radius={activeRadius} />
            </MapContainer>
        )
    };
};

export default DynamicMap;