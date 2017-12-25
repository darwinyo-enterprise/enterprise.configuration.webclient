import { NotificationComponent } from './../../components/notification/notification.component';
import { UserMenuComponent } from './../../components/user-menu/user-menu.component';
import { MessageMenuComponent } from './../../components/message-menu/message-menu.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentSearchModule, CovalentLoadingModule, CovalentNotificationsModule, CovalentMenuModule } from '@covalent/core';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { RouterStub } from './../../../shared/stubs/router.stub';
import { Router } from '@angular/router';
import { MatIconModule, MatMenuModule, MatListModule } from '@angular/material';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { NavbarContainer } from './navbar.container';
import * as fromCore from './../../reducers/core-state.reducer';
import * as fromRoot from './../../../reducers/app-state.reducer';
import * as NavbarActions from './../../actions/navbar-container.actions';
import { of } from 'rxjs/observable/of';
import { NavbarContainerSetup } from '../../testing/setup/containers/navbar-container.setup.spec';
import { URLsClient } from '../../../shared/consts/url.const';
describe('[CORE] [CONTAINER] NAVBARCONTAINER', () => {
  let component: NavbarContainer;
  let fixture: ComponentFixture<NavbarContainer>;
  let coreStore: Store<fromCore.State>;
  let router: Router;
  let navbarContainerSetup: NavbarContainerSetup;
  const productId: string = '123';
  const searchTerms: string = 'Test';
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarContainer,
        MessageMenuComponent,
        NotificationComponent,
        UserMenuComponent
      ],
      imports: [
        FormsModule,
        NoopAnimationsModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        StoreModule.forRoot({
          ...fromRoot.routerReducers,
          core: combineReducers(fromCore.coreStateReducer),
        }),
        CovalentMenuModule,
        CovalentNotificationsModule,
        CovalentSearchModule,
        CovalentLoadingModule
      ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    });
  }));
  function createComponent() {
    fixture = TestBed.createComponent(NavbarContainer);
    component = fixture.componentInstance;
    coreStore = TestBed.get(Store);
    router = TestBed.get(Router);
    navbarContainerSetup = new NavbarContainerSetup(fixture,
      component, router,  false)
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      navbarContainerSetup.initControls();
    })
  }
  function initLoggedControls() {
    navbarContainerSetup.isLogged = true;
    navbarContainerSetup.initControls();
    fixture.detectChanges();
  }
  beforeEach(async(() => {
    createComponent();
  }));
  afterEach(() => {
    component = null;
    fixture = null;
    coreStore = null;
    router = null;
    navbarContainerSetup.cleanControls();
    navbarContainerSetup = null;
  })
  describe('UI Tests', () => {
    describe('Is Not Logged', () => {
      it('should display login & registration btn when user is not logged', () => {
        expect(navbarContainerSetup.loginBtn.innerHTML).toContain('Login');
        expect(navbarContainerSetup.registrationBtn.innerHTML).toContain('Register');
      });
      it('should not display Other menu btn when user is not logged', () => {
        expect(navbarContainerSetup.notificationBtn).toBeUndefined();
        expect(navbarContainerSetup.messageBtn).toBeUndefined();
        expect(navbarContainerSetup.userBtn).toBeUndefined();
      });
    })
    describe('Is Logged', () => {
      beforeEach(() => {
        component.logged$ = of(true);
        initLoggedControls();
      })
      it('should not display login & registration btn when user is not logged', () => {
        expect(navbarContainerSetup.loginBtn).toBeUndefined;
        expect(navbarContainerSetup.registrationBtn).toBeUndefined;
      });
      it('should display Other menu btn when user is not logged', () => {
        expect(navbarContainerSetup.menuHolder.children[0].innerHTML).toContain('notifications');
        expect(navbarContainerSetup.menuHolder.children[1].innerHTML).toContain('messages');
        expect(navbarContainerSetup.menuHolder.children[2].innerHTML).toContain('person');
      });
    })
  });
  describe('Functionality Tests', () => {
    describe('Is Logged', () => {
      beforeEach(() => {
        component.logged$ = of(true);
        initLoggedControls();
      })
      it('should navigate when anchors clicked', () => {
        component.onNavigateEvent(URLsClient.urlMyProfile);
        expect(router.navigate).toHaveBeenCalledWith([URLsClient.urlMyProfile]);
      })
    })
    describe('Is Not Logged', () => {
      it('should navigate when anchors clicked', () => {
        navbarContainerSetup.registrationBtn.click();
        expect(router.navigate).toHaveBeenCalledWith([URLsClient.urlRegister]);
      })
    })
  });
});
