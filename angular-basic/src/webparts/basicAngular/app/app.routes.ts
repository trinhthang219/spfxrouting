import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customerdetail', component: CustomerDetailComponent },
  { path: '**', redirectTo: '' }  
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });