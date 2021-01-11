import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [ { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'statistic', component: StatisticComponent, canActivate: [AuthGuard] },
{ path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
