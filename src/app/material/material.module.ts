import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';


const materials = [
  MatButtonModule,MatCheckboxModule, MatIconModule, MatListModule,
  MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule, MatInputModule, MatMenuModule, MatTableModule, MatCardModule, MatSelectModule, MatDatepickerModule, MatRadioModule
]

@NgModule({
  declarations: [],
  imports: [
    materials
  ],
  exports: [
    materials
  ]
})

export class MaterialModule { }
