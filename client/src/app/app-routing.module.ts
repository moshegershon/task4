import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManegmentComponent } from './components/manegment/manegment.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
{path:'',component:ManegmentComponent, pathMatch: 'full'},
{path:'tasks',component:ManegmentComponent},
{path:'add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }