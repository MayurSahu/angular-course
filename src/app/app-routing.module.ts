import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { BlockitGuard } from './blockit.guard';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'info',component:InfoComponent},
  {path:'profile',component:ProfileComponent},
  { path: 'customer',
  canActivate:[BlockitGuard],
   loadChildren: () => import('./customer/customer.module')
  .then(m => m.CustomerModule) },
  {path:'**',component:HomeComponent}


];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes,{enableTracing:true}
      )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
