import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Page404Component } from './components/page404/page404.component';


@NgModule({
  declarations: [
    HeaderComponent,
    Page404Component,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
