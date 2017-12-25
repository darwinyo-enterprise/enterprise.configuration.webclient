import { UserMenuComponent } from './../../../components/user-menu/user-menu.component';
import { ComponentFixture } from '@angular/core/testing';
import { BaseTestingSetup } from './../../../../shared/contracts/testing/setup.interface';
export class UserMenuComponentSetup implements BaseTestingSetup {
    componentEl: HTMLElement;
    anchorLogout: HTMLAnchorElement;
    navigateEventSpy: jasmine.Spy;
    constructor(
        private fixture: ComponentFixture<UserMenuComponent>,
        private comp: UserMenuComponent
    ) {
        this.initSpies();
    }
    initControls(): void {
        this.componentEl = this.fixture.debugElement.nativeElement;
        this.anchorLogout = <HTMLAnchorElement>this.componentEl.children[8];
    }
    initSpies(): void {
        this.navigateEventSpy = spyOn(this.comp.navigateEvent, 'emit');
    }
    cleanControls(): void {
        this.componentEl = null;
        this.anchorLogout = null;
        this.navigateEventSpy = null;
    }
}
