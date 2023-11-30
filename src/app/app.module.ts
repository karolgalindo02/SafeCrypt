import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './dashboard/container/container.component';
import { CryptComponent } from './dashboard/crypt/crypt.component';
import { FormComponent } from './dashboard/form/form.component';
import { LoginComponent } from './dashboard/login/login.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { TablesComponent } from './dashboard/tables/tables.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ContainerComponent,
    LoginComponent,
    FormComponent,
    CryptComponent,
    TablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
