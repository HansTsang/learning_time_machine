import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './pages/setup/setup.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/setup' },
  { path: 'setup', component: SetupComponent },
  { path: 'main', pathMatch: 'full', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
