import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from '../additem/additem.component';
import { AdminComponent } from './admin.component';
import { EditcakeComponent } from '../editcake/editcake.component';

const routes :Routes = [
  {path : '' , component : AdminComponent},
  {path: 'addcake', component : AdditemComponent},
  {path: 'editcake/:id', component : EditcakeComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports : [
    RouterModule
  ]
})
export class AdminModule { }
