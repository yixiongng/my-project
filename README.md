Steps to get started to install leaflet in Angular

ng new projectname

cd projectname

ng g component leaflet

npm install leaflet

download the file from the following link and unzip it inside the directory /src/assets/leaflet: http://cdn.leafletjs.com/leaflet/v1.3.4/leaflet.zip

Include the leaflet script and CSS style to the src/angular.json file. Here is how it looks:

"styles": [ "src/styles.css", "src/assets/leaflet/leaflet.css" ], "scripts": [ "src/assets/leaflet/leaflet.js" ] ]

*note: make sure the directory of the file is the same directory with step 5

this is how leaflet.component.html look like
<style> #mapid { height: 1000px; width: 100% } </style>
this is how leaflet.component.ts look like
import { Component, OnInit } from '@angular/core';

declare let L; @Component({ selector: 'app-leaflet', templateUrl: './leaflet.component.html', styleUrls: ['./leaflet.component.css'] }) export class LeafletComponent implements OnInit {

constructor() { }

ngOnInit() { const map = L.map('mapid').setView([5.35714,100.30281], 50);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
}
}

this is how leaflet.component.css looks like
.div{ height: 100%; width: 100%; }

this is how app.componentnew.html looks like
