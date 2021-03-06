import { MenuModel } from './../../../shared/models/menu/menu.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-core-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  @Input() menuModel: MenuModel[];
  @Output() navigateEvent: EventEmitter<string>;
  constructor() {
    this.navigateEvent = new EventEmitter();
  }

  ngOnInit() {
  }
  onMenu_Clicked(url: string) {
    this.navigateEvent.emit(url);
  }
}
