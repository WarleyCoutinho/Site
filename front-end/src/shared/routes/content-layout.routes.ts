import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes =[
  {
    path: 'residencia',
    loadChildren: () => 
    import('../../app/pages/residencia/residencia.module').then(
      (m) => m.ResidenciaModule
      ),
  },
  
];
