/*global google*/
import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Polygon, Marker, InfoWindow} from "react-google-maps";



const MapContainer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDf-yIqxErTkbWzKhLox7nAANnrfDIY190&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `800px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={new google.maps.LatLng(8.285465, -62.719059)}> 

         {props.places.map(place => (
          <Marker
            key={`marker-${place.name}`}
            title={place.title}
            name={place.name}
            position={place.position}
            
          >
          <InfoWindow
            key={newFunction(place)}
            visible={true}>
            <div>{`${place.name} = ${place.homicidios} `}</div>
          </InfoWindow>
          </Marker>
        ))}

        {props.parroquiasPolygns.map(parroquia => (
            <Polygon
                key={`polygon-${parroquia.id}`}
                path={parroquia.data}
            >
            </Polygon>
        ))}
        

    </GoogleMap>
);



export default MapContainer;

function newFunction(place) {
    return `infowindow-${place.name}`;
}
