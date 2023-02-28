import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import style from "./Maps.module.css";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: -31.3922,
  lng: -59.0169,
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCKNGyH3YVhuCzzVmj6AFbhf_12QeBEBTg",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className={style.map}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={1}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
