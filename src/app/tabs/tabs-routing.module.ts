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
        loadChildren: () => import('../paginas/cliente/sel-cliente/sel-cliente.module').then(m => m.SelClientePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../paginas/cadastro/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../paginas/motorista/sel-motorista/sel-motorista.module').then(m => m.SelMotoristaPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../paginas/tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/tab2',
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