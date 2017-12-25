import { NavbarContainer } from './../../../containers/navbar/navbar.container';
import { ComponentFixture } from '@angular/core/testing';
import { BaseTestingSetup } from './../../../../shared/contracts/testing/setup.interface';
import { MessageMenuComponent } from '../../../components/message-menu/message-menu.component';
import { NotificationComponent } from '../../../components/notification/notification.component';
import { UserMenuComponent } from '../../../components/user-menu/user-menu.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import * as fromCore from './../../../reducers/core-state.reducer';
export class NavbarContainerSetup implements BaseTestingSetup {
    routerSpy: jasmine.Spy;
    navigateEventSpy: jasmine.Spy;
    menuHolder: HTMLElement;
    loginBtn: HTMLButtonElement;
    registrationBtn: HTMLButtonElement;
    notificationBtn: HTMLButtonElement;
    messageBtn: HTMLButtonElement;
    userBtn: HTMLButtonElement;
    constructor(
        private fixture: ComponentFixture<NavbarContainer>,
        private comp: NavbarContainer,
        private router: Router,
        public isLogged: boolean
    ) {
        this.initSpies();
    }
    initControls(): void {
        this.fixture.detectChanges();
        this.menuHolder = this.fixture.debugElement.query(By.css('.menus-holder')).nativeElement;
        
        if (this.isLogged) {
            this.initLoggedControls();
        } else {
            this.initNotLoggedControls();
        }
    }
    initSpies(): void {
        this.routerSpy = spyOn(this.router, 'navigate').and.callThrough();
        this.navigateEventSpy = spyOn(this.comp, 'onNavigateEvent').and.callThrough();
    }
    cleanControls(): void {
        this.routerSpy = null;
        this.navigateEventSpy = null;
        this.menuHolder = null;
        this.loginBtn = null;
        this.registrationBtn = null;
        this.notificationBtn = null;
        this.messageBtn = null;
        this.userBtn = null;
    }
    initLoggedControls(): void {
        this.loginBtn = undefined;
        this.registrationBtn = undefined;
        this.notificationBtn = <HTMLButtonElement>this.menuHolder.children[0].children[0];
        this.messageBtn = <HTMLButtonElement>this.menuHolder.children[1].children[0];
        this.userBtn = <HTMLButtonElement>this.menuHolder.children[2].children[0];
    }
    initNotLoggedControls(): void {
        this.loginBtn = <HTMLButtonElement>this.menuHolder.children[0].children[1];
        this.registrationBtn = <HTMLButtonElement>this.menuHolder.children[0].children[0];
        this.notificationBtn = undefined;
        this.messageBtn = undefined;
        this.userBtn = undefined;
    }
}
