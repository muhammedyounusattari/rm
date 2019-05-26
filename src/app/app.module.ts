import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent }   from './app.component';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[AppService]
})

export class AppModule { }





// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
