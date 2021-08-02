import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes =[
  {
    path: 'residencias',
    loadChildren: () => 
    import('../../app/pages/residencia/residencia.module').then(
      (m) => m.ResidenciaModule
      ),
  },

  {
    path: 'cidades',
    loadChildren: () => 
    import('../../app/pages/cidade/cidade.module').then(
      (m) => m.CidadeModule
      ),
  },

  {
    path: 'bairros',
    loadChildren: () => 
    import('../../app/pages/bairro/bairro.module').then(
      (m) => m.BairroModule
      ),
  },
  {
    path: 'home',
    loadChildren: () => 
    import('../../app/pages/home/home.module').then(
      (m) => m.HomeModule
      ),
  },
  
];
