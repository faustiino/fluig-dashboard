import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { StatusServicesComponent } from './components/status-services/status-services.component';
import { DashboardService } from './services/dashboard.service';
import { CookieService } from 'ngx-cookie-service';
import { APP_BASE_HREF } from '@angular/common';
import { APP_CONFIG } from './app.config';
import { CardMonitorComponent } from './components/card-monitor/card-monitor.component';
import { CardMonitorLargeComponent } from './components/card-monitor-large/card-monitor-large.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusServicesComponent,
    CardMonitorComponent,
    CardMonitorLargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule
  ],
  providers: [
    DashboardService,
    provideHttpClient(withInterceptorsFromDi()),
    [CookieService],
    {provide: APP_BASE_HREF, useValue: APP_CONFIG.APP_BASE}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
