import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MultistepComponent }   from './multistep.component';
import { MultistepBaseComponent } from './multistep.base-component';
import { MultistepService } from './multistep.service';
import { MultistepStep1Component } from './multistep.step1.component';
import { MultistepStep2Component } from './multistep.step2.component';
import { multistepRouting } from './multistep.routing';

@NgModule({
  imports: [ 
   BrowserModule,
   FormsModule,
   multistepRouting
  ],
  declarations: [ 
  AppComponent,
   MultistepComponent,
   MultistepBaseComponent,
   MultistepStep1Component,
   MultistepStep2Component 
  ],
  providers: [ MultistepService ],
  bootstrap: [ AppComponent ]
})
export class MultistepModule { }