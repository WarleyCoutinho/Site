import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONTENT_ROUTES } from 'src/shared/routes/layout.routes';
import { LayoutComponent } from './layouts/layout/layout.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: CONTENT_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
