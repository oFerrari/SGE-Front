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
  {
    path: 'add-edit-motorista/:id',
    loadChildren: () => import('./paginas/motorista/add-edit-motorista/add-edit-motorista.module').then( m => m.AddEditMotoristaPageModule)
  },
  {
    path: 'sel-veiculo',
    loadChildren: () => import('./paginas/veiculo/sel-veiculo/sel-veiculo.module').then( m => m.SelVeiculoPageModule)
  },
  {
    path: 'add-edit-veiculo',
    loadChildren: () => import('./paginas/veiculo/add-edit-veiculo/add-edit-veiculo.module').then( m => m.AddEditVeiculoPageModule)
  },
  {
    path: 'add-edit-veiculo/:id',
    loadChildren: () => import('./paginas/veiculo/add-edit-veiculo/add-edit-veiculo.module').then( m => m.AddEditVeiculoPageModule)
  },
  {
    path: 'sel-pedido-entrega',
    loadChildren: () => import('./paginas/pedido-entrega/sel-pedido-entrega/sel-pedido-entrega.module').then( m => m.SelPedidoEntregaPageModule)
  },
  {
    path: 'add-edit-pedido-entrega',
    loadChildren: () => import('./paginas/pedido-entrega/add-edit-pedido-entrega/add-edit-pedido-entrega.module').then( m => m.AddEditPedidoEntregaPageModule)
  },
  {
    path: 'add-edit-pedidoEntrega/:id',
    loadChildren: () => import('./paginas/pedido-entrega/add-edit-pedido-entrega/add-edit-pedido-entrega.module').then( m => m.AddEditPedidoEntregaPageModule)
  },
  {
    path: 'add-edit-administrador',
    loadChildren: () => import('./paginas/administrador/add-edit-administrador/add-edit-administrador.module').then( m => m.AddEditAdministradorPageModule)
  },







];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
