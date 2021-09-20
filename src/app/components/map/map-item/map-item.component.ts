import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-map-item',
  templateUrl: './map-item.component.html',
  styleUrls: ['./map-item.component.scss']
})
export class MapItemComponent implements OnInit {

  @Input() classElem: String;
  @Input() title: String;
  @Input() location: Location;

  constructor() { }

  ngOnInit(): void {}

}