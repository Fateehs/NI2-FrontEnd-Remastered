import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/common/about/about.component';
import { HomeComponent } from './components/common/home/home.component';
import { RegisterComponent } from './components/common/register/register.component';
// Test commit
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/common/register/register.module').then(
        (module) => module.RegisterModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/common/login/login.module').then(
        (module) => module.LoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
