import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SendDataComponent } from './send-data/send-data.component';
import { SendAirtimeComponent } from './send-airtime/send-airtime.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SendDataComponent,
    SendAirtimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
