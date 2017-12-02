import React from 'react';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MyMap = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: props.latLng.lat, lng: props.latLng.lng }}
  >
    <Marker position={{ lat: props.latLng.lat, lng: props.latLng.lng }} />
  </GoogleMap>
)

