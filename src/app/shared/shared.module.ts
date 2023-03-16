import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibsModule } from './shared-libs.module';
import { CoreModule } from '../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SkeletorMainComponent } from './layouts/skeletor-main/skeletor-main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SkeletorMainComponent
  ],
  imports: [
    SharedLibsModule, 
  ],
  exports:[
    HeaderComponent,
    
    NavbarComponent,
    SkeletorMainComponent,
    SharedLibsModule
  ]
})
export class SharedModule { }
