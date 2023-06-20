import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/Home/home.component';
import {AboutComponent} from './pages/AboutUs/about.component';
import {VisionComponent} from './pages/AboutUs/vision.component';
import {StructureComponent} from './pages/AboutUs/structure.component';
import {PolicyComponent} from './pages/AboutUs/policy.component';
import {PhilosophyComponent} from './pages/AboutUs/philosophy.component';
import {PriceComponent} from './pages/Price/price.component';
import {SupportComponent} from './pages/Support/Support.component';
import {ContactUsComponent} from './pages/ContactUs/ContactUs.component';
import { ERPComponent } from './pages/Products/ERP.component';
import { QLCHComponent } from './pages/Products/QLCH.component';
import { KDXDComponent } from './pages/Products/KDXD.component';
import { QLKhoComponent } from './pages/Products/QLKho.component';
import { News_DetailsComponent } from './pages/News_Details/News_Details.component';
import { Project_DetailsComponent } from './pages/Projects/Project_Details.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Vision', component:VisionComponent},
  {path:'Structure', component:StructureComponent},
  {path:'Policy', component:PolicyComponent},
  {path:'Philosophy', component:PhilosophyComponent},
  {path:'Price', component:PriceComponent},
  {path:'Support', component:SupportComponent},
  {path:'ContactUs', component:ContactUsComponent},
  {path:'Product/ERP', component:ERPComponent},
  {path:'Product/QLCH', component:QLCHComponent},
  {path:'Product/KDXD', component:KDXDComponent},
  {path:'Product/QLKho', component:QLKhoComponent},
  {path:'News/:NewsId', component:News_DetailsComponent},
  {path:'Project/:ProjectId', component:Project_DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
