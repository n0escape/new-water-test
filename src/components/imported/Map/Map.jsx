import s from './Map.module.css'
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import classNames from 'classnames';


delete L.Icon.Default.prototype._getIconUrl;

const defaultIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});

const MapPlaceholder = () => {
  return (
    <p>
      Карта с маркерами наших работ.{' '}
      <noscript>Для просмотра карты включите JavaScript.</noscript>
    </p>
  )
}

const startPositionWorks = [49.0, 31.0]; // Начальное положение карты

const MapTemplate = ({content, startPos, zoomSize, heightContainer, widthContainer, markers}) => {

  const contextedMap = classNames(s.containerMap, {
    [s.officeContext]: content === 'office',
    [s.worksContext]: content === 'works',
  });

  return ( 
    <div className={contextedMap}>
      {/* Убедитесь, что установлены высота и ширина контейнера карты, иначе карта не будет отображаться */}
      <MapContainer center={startPos} zoom={zoomSize} style={{height: heightContainer, width: widthContainer}} placeholder={<MapPlaceholder />}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Дополнительные слои карты или компоненты могут быть добавлены здесь */}

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.location} icon={defaultIcon}>
            <Popup>
              <b>{marker.title}</b>
              <br />
              {marker.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

const MapFrame = ({content, markers}) => {
  switch (content) {
    case 'office':
    return <MapTemplate content={content} startPos={markers[0].location} zoomSize={13} heightContainer={'400px'} widthContainer={'40vw'} markers={markers}/>
    case 'works': 
    return <MapTemplate content={content} startPos={startPositionWorks} zoomSize={5} heightContainer={'400px'} widthContainer={'80vw'} markers={markers}/>
    default: 
    return <div>Error: wrong content param in mapFrame</div>;
  }
  // return ( 
  //   // Убедитесь, что установлены высота и ширина контейнера карты, иначе карта не будет отображаться
  //     <MapContainer center={startPosition} zoom={13} style={{height: "50vh", width: "90vw"}} placeholder={<MapPlaceholder />}>
  //       <TileLayer
  //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //       {/* Дополнительные слои карты или компоненты могут быть добавлены здесь */}

  //       {markersWorks.map((marker, index) => (
  //         <Marker key={index} position={marker.position} icon={defaultIcon}>
  //           <Popup>
  //             <b>{marker.title}</b>
  //             <br />
  //             {marker.description}
  //           </Popup>
  //         </Marker>
  //       ))}
  //     </MapContainer>
  // );
}

export default MapFrame;