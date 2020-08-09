import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VsignupComponent } from './vsignup.component';

const routes: Routes = [
    {
       path:'',
       component: VsignupComponent 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VsignupRoutingModule {}
