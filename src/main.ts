import {trace, UIROUTER_PROVIDERS, UiView, UIRouterConfig, Category, UIROUTER_DIRECTIVES} from 'ui-router-ng2';
import { AppUIRouterConfig } from './app/router-config';
import {provide, PLATFORM_DIRECTIVES} from "@angular/core";
import { bootstrap } from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy, PlatformLocation} from "@angular/common";
import {BrowserPlatformLocation} from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { Ng2UiRouterAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}


bootstrap(Ng2UiRouterAppComponent, [
          UIROUTER_PROVIDERS,
          provide(LocationStrategy, { useClass: PathLocationStrategy }),
          provide(PlatformLocation, { useClass: BrowserPlatformLocation }),
          provide(UIRouterConfig, { useClass: AppUIRouterConfig}),
          provide(PLATFORM_DIRECTIVES, { useValue: [UIROUTER_DIRECTIVES], multi: true})
]);

