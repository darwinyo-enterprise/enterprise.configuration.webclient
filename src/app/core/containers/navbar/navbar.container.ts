import { notifications } from './../../../shared/mock-data/notifications';
import { NotificationModel } from './../../models/notification/notification.model';
import { messageMenu } from './../../../shared/mock-data/message-menu';
import { userMenu } from './../../../shared/mock-data/user-menu';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MenuModel } from './../../../shared/models/menu/menu.model';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromCore from './../../reducers/core-state.reducer';
import * as NavbarActions from './../../actions/navbar-container.actions';
import { URLsClient } from '../../../shared/consts/url.const';

@Component({
  selector: 'app-core-navbar',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class NavbarContainer implements OnInit, OnDestroy {
  logged$: Observable<boolean>;
  toggleLogin$: Observable<boolean>;
  unsubscribe$: ReplaySubject<boolean>;
  //#region LoginNav observables
  loginNavComponentIsPasswordShow$: Observable<boolean>;
  loginNavComponentPending$: Observable<boolean>;
  //#endregion
  //#region Dumb Component Inputs Values
  userMenuModel: MenuModel[];
  messageMenuModel: MenuModel[];
  notification: NotificationModel[];
  //#endregion
  registerUrl: string;
  constructor(
    private router: Router,
    private coreStore: Store<fromCore.State>
  ) {
    //#region Dumb Component Inputs Values
    this.messageMenuModel = [];
    this.userMenuModel = [];
    this.notification = [];
    //#endregion
    this.logged$ = this.coreStore.select(fromCore.getNavbarContainerLogged);
    this.unsubscribe$ = new ReplaySubject(1);
  }

  ngOnInit() {
    //#region Mock Data
    this.userMenuModel = userMenu;
    this.messageMenuModel = messageMenu;
    this.notification = notifications;
    //#endregion
    this.registerUrl = URLsClient.urlRegister;
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
  onNavigateEvent(url: string) {
    this.router.navigate([url]);
  }
}
