import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'my-busroute',
  templateUrl: './my-busroute.component.html',
  styleUrls: ['./my-busroute.component.css']
})
export class MyBusrouteComponent implements OnInit {

  selected = 'Bus Route';
  constructor() { }

  ngOnInit() {
  }

}
