import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../paginas/cliente/add-edit-cliente/add-edit-cliente.module').then(m => m.AddEditClientePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../paginas/entrega/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../paginas/cadastro/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../paginas/tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login', // Rota para a tela de login
    loadChildren: () => import('../paginas/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '', // Redirecionar a raiz para a tela de login
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
