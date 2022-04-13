import { ArrayType } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { HostListener } from "@angular/core";
import { Marker } from 'src/app/shared/interfaces/marker';

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
    disableDoubleClickZoom: false,
    disableDefaultUI: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  }
  screenHeight: number | undefined;
  screenWidth: number | undefined;
  markers: Marker[] = [];
  infoContent = '';

  constructor() {
    this.onResize();
  }   

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    this.markers.push({
      markerPosition: {lat: 50.8380985302848, lng: 5.702648882018022},
      markerOptions: {draggable: false},
      info: {
        imgUrl: "/assets/CarnavalMatskoGif.gif",
    }
    });
  
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event?: any) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
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

  // markerOptions: google.maps.MarkerOptions = {draggable: false};
  // markerPositions: google.maps.LatLngLiteral[] = [];

  // addMarker(event: google.maps.MapMouseEvent) {
  //   if(!!event.latLng) {
  //     console.log(event.latLng.toJSON());
      
  //   }
  // }
  
  openInfoWindow(marker: MapMarker, mark: Marker) {
    this.infoContent = mark.info.imgUrl;
    this.infoWindow.open(marker);
  }
}
