import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() stats: boolean;
  @Input() map: boolean;
  @Input() rules: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
