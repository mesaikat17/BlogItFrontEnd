import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
