import { RouterModule, Routes } from '@angular/router';

import { LandPageComponent } from './land-page/land-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: LandPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
