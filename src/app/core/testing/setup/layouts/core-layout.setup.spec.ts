import { BaseTestingSetup } from "../../../../shared/contracts/testing/setup.interface";
import { ComponentFixture } from "@angular/core/testing";
import { CoreLayout } from "../../../layouts/core/core.layout";

export class CoreLayoutSetup implements BaseTestingSetup {
    
    
    constructor(
        private fixture: ComponentFixture<CoreLayout>,
        private comp: CoreLayout
    ) { }
    initControls(): void {
        throw new Error("Method not implemented.");
    }
    initSpies(): void {
        throw new Error("Method not implemented.");
    }
    cleanControls(): void {
        throw new Error("Method not implemented.");
    }

}