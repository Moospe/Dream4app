import { ArrayType } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  }
  // markers: google.maps.Marker[] = [];
  // infoContent = '';

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  // zoomIn() {
  //   if (this.zoom < this.options.maxZoom!) this.zoom++
  // }

  // zoomOut() {
  //   if (this.zoom > this.options.minZoom!) this.zoom--
  // }

  // click(event: google.maps.MapMouseEvent) {
  //   console.log(event)
  // }

  // logCenter() {
  //   console.log(JSON.stringify(this.map.getCenter()))
  // }

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    if(!!event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }
  
  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
}
