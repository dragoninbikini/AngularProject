import { Routes } from '@angular/router';

export const routes: Routes = [ {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./components/home/home').then((m) => m.Home)
    }
},
  {
    path: 'signup',
    loadComponent: () => {
        return import('./components/signup-page/signup-page').then((m) => m.SignupPage)
    },
  },
  {
    path: 'login',
    loadComponent: () => {
        return import('./components/login-page/login-page').then((m) => m.LoginPage)
    },
  },
  {
    path: 'homepage',
    loadComponent: () => {
      return import('./pages/homepage/homepage').then((m) => m.Homepage)
  }
},
 {
    path: 'getstarted',
    loadComponent: () =>
      import('./pages/getstarted/getstarted').then((m) => m.Getstarted)
  }
];
