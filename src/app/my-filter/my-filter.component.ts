import {  OnInit } from '@angular/core';
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'my-filter',
  templateUrl: './my-filter.component.html',
  styleUrls: ['./my-filter.component.css']
})

export class MyFilterComponent implements OnInit {
  filters = new FormControl();

  filterslist: string[] = ['Desasiswa', 'School', 'Lecture Hall', 'Tutorial Room', 'Blocks'];
  constructor() { }

  ngOnInit() {
  }

}
