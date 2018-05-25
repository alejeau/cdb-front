import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerUpdateComponent } from '../computer/computer-update/computer-update.component';
import { ComputerAddComponent } from '../computer/computer-add/computer-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ComputersComponent } from '../computers/computers.component';
import { ComputerComponent } from './computer.component';

@NgModule({
  declarations: [
    ComputerComponent,
    ComputerUpdateComponent,
    ComputerAddComponent,
    ComputersComponent,
  ],

  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    ComputerComponent,
    ComputersComponent,
    ComputerAddComponent,
    ComputerUpdateComponent,
  ]
})
export class ComputerModule { }
