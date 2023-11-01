import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sel-cliente',
    loadChildren: () => import('./paginas/cliente/sel-cliente/sel-cliente.module').then( m => m.SelClientePageModule)
  },
  {
    path: 'add-edit-cliente/:id',
    loadChildren: () => import('./paginas/cliente/add-edit-cliente/add-edit-cliente.module').then( m => m.AddEditClientePageModule)
  },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
