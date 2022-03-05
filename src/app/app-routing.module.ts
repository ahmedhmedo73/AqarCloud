import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:"login",pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'products',canActivate:[AuthGuard], component:ProductsComponent},
  {path:'statistics',canActivate:[AuthGuard], component:StatisticsComponent},
  {path:'users',canActivate:[AuthGuard], component:UsersComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
