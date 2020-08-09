import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'vsignup',
        loadChildren: () => import('./vsignup/vsignup.module').then(m => m.VsignupModule)
    },
    {
        path: 'vlogin',
        loadChildren: () => import('./vlogin/vlogin.module').then(m => m.VloginModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
