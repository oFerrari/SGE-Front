import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../Clientes/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../Dashboard/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../Cadastro/tab3.module').then(m => m.Tab3PageModule)
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
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
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
