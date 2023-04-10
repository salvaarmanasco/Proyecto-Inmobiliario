export interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

export interface MarkerProps {
  position: {
    lat: number;
    lng: number;
  };
  onClick?: () => void;
}
