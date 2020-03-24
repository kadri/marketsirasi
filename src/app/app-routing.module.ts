import { SettingsComponent } from './pages/settings/settings.component';
import { CounterComponent } from './pages/counter/counter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  component: SettingsComponent,
  path: 'settings'
}, {
  component: CounterComponent,
  path: '**'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
