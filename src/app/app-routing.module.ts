import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path : '', redirectTo: 'default', pathMatch: 'full'},
  {path : 'default', component: MainComponent},
  {path : '**', redirectTo: 'default'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
