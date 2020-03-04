import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

const appRoutes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent,  },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }
];

export const RutasConfiguradas = RouterModule.forRoot(appRoutes);
