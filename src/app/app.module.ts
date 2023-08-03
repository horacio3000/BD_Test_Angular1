import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{DemoMaterialModule}from 'src/app/Scripts/Main/materialmodule';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import { FIllDataService } from './Services/fill-data.service';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './View/default/default.component';
import { DeleteRowService } from './Services/delete-row.service';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,

   DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,FormsModule, ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [FIllDataService,DeleteRowService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
