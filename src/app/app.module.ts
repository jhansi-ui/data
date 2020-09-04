import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployedataComponent } from './employedata/employedata.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployedataService } from './employedata.service';
import { StatecityComponent } from './statecity/statecity.component';
import { FilterPipe } from './filter.pipe';

 '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    EmployedataComponent,
    StatecityComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
