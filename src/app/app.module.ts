import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { OperatorComponent } from './operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
