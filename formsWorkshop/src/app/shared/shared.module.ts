import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {RouterOutlet} from "@angular/router";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class SharedModule { }
