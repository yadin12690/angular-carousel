import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponentComponent } from './card-component/card-component.component';


const routes: Routes = [
  { path: '', component: CardComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
