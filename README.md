Steps to get started

1. ng new projectname
2. cd projectname
3. ng g component leaflet
4. npm install leaflet

5. download the file from the following link and unzip it inside the directory /src/assets/leaflet: http://cdn.leafletjs.com/leaflet/v1.3.4/leaflet.zip

6. Include the leaflet script and CSS style to the src/angular.json file. Here is how it looks:

"styles": [
              "src/styles.css",
              "src/assets/leaflet/leaflet.css"
 ],
 "scripts": [
              "src/assets/leaflet/leaflet.js"
 ]           ]

*note: make sure the directory of the file is the same directory with step 5

7. this is how leaflet.component.html look like
<!DOCTYPE html>
<html lang="en">

<head>
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />

<style>

#mapid { height: 1000px;
  width: 100% }

</style>

</head>

<body>

<div id="mapid"></div>

</body>

</html>

8. this is how leaflet.component.ts look like

import { Component, OnInit } from '@angular/core';

declare let L;
@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = L.map('mapid').setView([5.35714,100.30281], 50);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

    let markericon = L.icon({
      iconUrl:'assets/leaflet/images/marker-icon.png',

      iconSize    :[25,41],
      iconAnchor  :[15,40],
      popupAnchor :[-47,-20]
    })

    L.marker([5.35714,100.30281],{icon:markericon}).addTo(map).bindPopup("DTSP");
    L.marker([5.35914,100.30285],{icon:markericon}).addTo(map).bindPopup("Pusat Sejahtera");
  }

}

9. this is how leaflet.component.css looks like

.div{
    height: 100%;
    width: 100%;
}

10. this is how app.componentnew.html looks like

<app-leaflet></app-leaflet>




