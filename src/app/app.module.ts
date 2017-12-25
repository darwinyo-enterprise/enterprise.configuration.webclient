import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

<<<<<<< HEAD
import { AppComponent } from './app.component';
=======
import { MatSidenavModule } from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomRouterStateSerializer } from './shared/utils';
import { CovalentDialogsModule } from '@covalent/core';
import { metaReducers, routerReducers } from './reducers/app-state.reducer';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

// Helpers
import { PostApiHelper } from './shared/helpers/post-api.helper';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

// 3rd Party
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
>>>>>>> Skeleton Builds Layout, Navbar, @ngrx/store, effects, etc


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    // Pre-rendering Setting
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // Server Workers
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
=======
    MatSidenavModule,
    RouterModule,
    CovalentDialogsModule,

    //#region Ngrx Suites
    StoreModule.forRoot(routerReducers, { metaReducers }),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    //#endregion

    // Pre-rendering Setting
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // Server Workers
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    CoreModule
  ],
  providers: [
    PostApiHelper,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
>>>>>>> Skeleton Builds Layout, Navbar, @ngrx/store, effects, etc
  bootstrap: [AppComponent]
})
export class AppModule { }
