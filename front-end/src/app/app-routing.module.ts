import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONTENT_ROUTES } from 'src/shared/routes/content-layout.routes';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: CONTENT_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
