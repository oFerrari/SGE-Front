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
    loadChildren: () => import('./paginas/cliente/add-edit-cliente/add-edit-cliente.module').then((m) => m.AddEditClientePageModule
      ),
  },
  {
    path: 'sel-motorista',
    loadChildren: () => import('./paginas/motorista/sel-motorista/sel-motorista.module').then( m => m.SelMotoristaPageModule)
  },
  {
    path: 'add-edit-motorista',
    loadChildren: () => import('./paginas/motorista/add-edit-motorista/add-edit-motorista.module').then( m => m.AddEditMotoristaPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
