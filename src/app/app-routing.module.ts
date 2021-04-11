import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
   { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   }, 
   { path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule), 
    data: { showHeader: false, showFooter: false } 
  },
    { path: 'register',
     loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) , data: { showHeader: false, showFooter: false }
    },
    { path: 'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) 
  } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
