import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mh-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pageTitle = 'InStep Movie Hunter';

  constructor() { }

  ngOnInit(): void {
  }

}
