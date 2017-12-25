import { NotificationComponent } from './../../../components/notification/notification.component';
import { ComponentFixture } from '@angular/core/testing';
import { BaseTestingSetup } from './../../../../shared/contracts/testing/setup.interface';
export class NotificationComponentSetup implements BaseTestingSetup {
    componentEl: HTMLElement;
    navigateEventSpy: jasmine.Spy;
    constructor(
        private fixture: ComponentFixture<NotificationComponent>,
        private comp: NotificationComponent
    ) {
        this.initSpies();
    }

    initControls(): void {
        this.componentEl = this.fixture.debugElement.nativeElement;
    }
    initSpies(): void {
        this.navigateEventSpy = spyOn(this.comp.navigateEvent, 'emit');
    }
    cleanControls(): void {
        this.componentEl = null;
        this.navigateEventSpy = null;
    }
}
