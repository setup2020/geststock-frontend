import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibsModule } from './shared-libs.module';
import { CoreModule } from '../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SkeletorMainComponent } from './layouts/skeletor-main/skeletor-main.component';
import { DrogAndDropDirective } from './directives/drag-and-drop.directive';
import { FullNamePipe, PriceItemPipe, SizeFilePipe } from './pipes/shared.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SkeletorMainComponent,
    DrogAndDropDirective
    ,
    FullNamePipe,
    SizeFilePipe,
    PriceItemPipe
  ],
  imports: [
    SharedLibsModule, 
  ],
  exports:[
    HeaderComponent,
    DrogAndDropDirective,

    FullNamePipe,
    SizeFilePipe,
    PriceItemPipe,
    
    NavbarComponent,
    SkeletorMainComponent,
    SharedLibsModule
  ]
})
export class SharedModule { }
