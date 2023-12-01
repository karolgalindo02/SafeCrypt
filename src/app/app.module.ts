import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './dashboard/container/container.component';
import { CryptComponent } from './dashboard/crypt/crypt.component';
import { FormComponent } from './dashboard/form/form.component';
import { LoginComponent } from './dashboard/login/login.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { WorkteamComponent } from './dashboard/workteam/workteam.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ContainerComponent,
    LoginComponent,
    FormComponent,
    CryptComponent,
    TablesComponent,
    RegisterComponent,
    WorkteamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"safecrypt-3e761","appId":"1:1057936575311:web:141b30d7ad2fd8711e133a","databaseURL":"https://safecrypt-3e761-default-rtdb.firebaseio.com","storageBucket":"safecrypt-3e761.appspot.com","apiKey":"AIzaSyDQqCSIFYk00Cezzb1MM6ANsP6Yfod3DtU","authDomain":"safecrypt-3e761.firebaseapp.com","messagingSenderId":"1057936575311","measurementId":"G-4MZ9KNZ6BV"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
