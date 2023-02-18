import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendAirtimeComponent } from './send-airtime/send-airtime.component';
import { SendDataComponent } from './send-data/send-data.component';

const routes: Routes = [
  { path: 'send-airtime', component: SendAirtimeComponent },
  { path: 'send-data', component: SendDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
