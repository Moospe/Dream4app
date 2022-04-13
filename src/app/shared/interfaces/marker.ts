export interface Marker {
    markerPosition: google.maps.LatLngLiteral,
    markerOptions: google.maps.MarkerOptions,
    info: {
        imgUrl: string,
    }
}