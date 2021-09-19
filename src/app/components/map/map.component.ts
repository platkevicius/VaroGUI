import { Component, OnInit } from '@angular/core';
import { BorderLocation } from 'src/app/models/BorderLocation';
import { LootboxLocation } from 'src/app/models/LootboxLocation';
import { UserLocation } from 'src/app/models/UserLocation';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  userLocs: UserLocation[];
  lootBoxLocs: LootboxLocation[];
  borderLoc: BorderLocation;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getUserLocations().subscribe((res) => {
      this.userLocs = res;
    });

    this.locationService.getLootboxLocations().subscribe((res) => {
      this.lootBoxLocs = res;
    });

    this.locationService.getBorderLocation().subscribe((res) => {
      this.borderLoc = res;
    });
  }

}