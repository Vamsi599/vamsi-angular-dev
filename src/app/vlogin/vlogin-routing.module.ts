import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VloginComponent } from './vlogin.component';

const routes: Routes = [
    {
       path:'',
       component: VloginComponent 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VloginRoutingModule {}
