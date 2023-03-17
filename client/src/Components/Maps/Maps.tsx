import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Center } from "@chakra-ui/react";

const containerStyle = {
  width: "600px",
  height: "600px",
};

function Maps(props: { lat: number; long: number }) {
  let { lat, long } = props;

  const center = {
    lat: -31.64881,
    lng: -60.70868,
  };

  const position = {
    lat: lat,
    lng: long,
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
