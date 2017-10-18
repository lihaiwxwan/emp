import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {IntoService} from './workspace/into.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpModule} from '@angular/http';
import {UserdataService} from './login/userdata.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule,RouterModule.forRoot(appRoutes),FormsModule,HttpModule,BrowserAnimationsModule
  ],
  providers: [IntoService,UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
