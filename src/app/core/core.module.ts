import { NotificationComponent } from './components/notification/notification.component';
import { MessageMenuComponent } from './components/message-menu/message-menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarContainerEffects } from './effects/navbar-container.effects';
import { EffectsModule } from '@ngrx/effects';
import { coreStateReducer } from './reducers/core-state.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

// // Containers
import { NavbarContainer } from './containers/navbar/navbar.container';
import { ErrorNotFoundPage } from './pages/error-not-found/error-not-found.page';

// Layouts
import { CoreLayout } from './layouts/core/core.layout';

//#region Containers

//#endregion
// Routes
import { AppRouteModule } from './routes/app-route.module';
import { HttpClientModule } from '@angular/common/http';

// Services


// SignalR

//#region FlexLayout
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatListModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { CovalentNotificationsModule, CovalentMenuModule, CovalentLayoutModule, CovalentExpansionPanelModule } from '@covalent/core';
//#endregion

@NgModule({
  declarations: [
    FooterComponent,
    UserMenuComponent,
    MessageMenuComponent,
    NotificationComponent,
    ErrorNotFoundPage,
    NavbarContainer,
    CoreLayout
  ],
  imports: [
    BrowserAnimationsModule,

    //#region Material
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    //#endregion

    //#region Covalent
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentLayoutModule,
    CovalentExpansionPanelModule,
    //#endregion
    //#region FlexLayout
    FlexLayoutModule,
    //#endregion

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouteModule,
    StoreModule.forFeature('core', coreStateReducer),
    EffectsModule.forFeature([NavbarContainerEffects])
  ],
  exports: [
    CoreLayout,
    FooterComponent,
    ErrorNotFoundPage,
    NavbarContainer,
  ],
  providers: [
  ]
})
export class CoreModule { }
