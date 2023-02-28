import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Center } from "@chakra-ui/react";

const containerStyle = {
  width: "600px",
  height: "600px",
};

function Maps() {
  const center = {
    lat: -31.64881,
    lng: -60.70868,
  };

  const position = {
    lat: -31.662622239399617,
    lng: -60.72541936116279,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCKNGyH3YVhuCzzVmj6AFbhf_12QeBEBTg",
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Center>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onUnmount={onUnmount}
      >
        <Marker position={position} />
      </GoogleMap>
    </Center>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
