import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './layouts/main/main.component';
import { ErrorComponent } from './layouts/error/error.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ng6-toastr-notifications';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MainComponent, ErrorComponent, DashboardComponent],
  imports: [BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
