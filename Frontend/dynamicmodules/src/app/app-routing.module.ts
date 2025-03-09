import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicmodulesComponent } from './dynamicmodules/dynamicmodules.component';
import { ModuleselectionComponent } from './moduleselection/moduleselection/moduleselection.component';
import { MasterdataentryComponent } from './masterdataentry/masterdataentry.component';

const routes: Routes = [
  { path: '', redirectTo: '/modules', pathMatch: 'full' },
  { path: 'modules', component: ModuleselectionComponent },
  { path: 'module/:modulename', component: DynamicmodulesComponent },
  { path: 'master', component: MasterdataentryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
