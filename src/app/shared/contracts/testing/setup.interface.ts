export interface BaseTestingSetup {
    initControls(): void;
    initSpies(): void;
    cleanControls(): void;
}
