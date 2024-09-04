import { Routes } from '@angular/router';

export const rutas: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component'),
    children: [
      {
        path: 'bienvenido',
        loadComponent: () => import('./auth/pages/welcome/welcome.component'),
      },
      {
        path: 'login',
        loadComponent: () => import('./auth/pages/login/login.component'),
      },
      {
        path: 'registro',
        loadComponent: () => import('./auth/pages/register/register.component'),
      },
    ],
  },
  {
    path: 'geovisor',
    loadComponent: () => import('./geovisor/geovisor.component'),
    children: [
      {
        path: 'mapa',
        loadComponent: () => import('./geovisor/pages/map/map.component'),
      },
      {
        path:'',
        redirectTo:'mapa',
        pathMatch: 'full'
      }
    ],
  },
  {
    path:'',
    redirectTo:'geovisor',
    pathMatch: 'full'
  },
  {
    path:'**',
    loadComponent: () => import('./shared/error/error.component')
  }
];
