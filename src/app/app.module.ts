import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_Shared/header.component';
import { BannerComponent } from './_Shared/banner.component';
import { FooterComponent } from './_Shared/footer.component';
import { PartnerComponent } from './pages/Home/partner.component';
import { AboutNavleftComponent } from './_Shared/about-navleft.component';
import { ProjectsComponent } from './pages/Home/projects.component';
import { ProductsComponent } from './pages/Home/products.component';
import { FieldOperationsComponent } from './pages/Home/fieldOperations.component';
import { TechnologyComponent } from './pages/Home/technology.component';
import { CustomersComponent } from './pages/Home/customers.component';
import { HomeComponent } from './pages/Home/home.component';
import { WhyChossingUsComponent } from './pages/Home/whyChossingUs.component';
import { AboutComponent } from './pages/AboutUs/about.component';
import { VisionComponent } from './pages/AboutUs/vision.component';
import { StructureComponent } from './pages/AboutUs/structure.component';
import { PolicyComponent } from './pages/AboutUs/policy.component';
import { PhilosophyComponent } from './pages/AboutUs/philosophy.component';
import { PriceComponent } from './pages/Price/price.component';
import { SupportComponent } from './pages/Support/Support.component';
import { ContactUsComponent } from './pages/ContactUs/ContactUs.component';
import { ERPComponent } from './pages/Products/ERP.component';
import { QLCHComponent } from './pages/Products/QLCH.component';
import { KDXDComponent } from './pages/Products/KDXD.component';
import { QLKhoComponent } from './pages/Products/QLKho.component';
import { PriceERPComponent } from './pages/Price/PriceERP.component';
import { PriceQLCHComponent } from './pages/Price/PriceQLCH.component';
import { PriceKDXDComponent } from './pages/Price/PriceKDXD.component';
import { PriceQLKhoComponent } from './pages/Price/PriceQLKho.component';
import { HotNewsComponent } from './pages/Home/hotNews.component';
import { News_DetailsComponent } from './pages/News_Details/News_Details.component';
import { Project_DetailsComponent } from './pages/Projects/Project_Details.component';
import { IntroComponent } from './pages/Home/intro.component';
import { OperationComponent } from './pages/Home/operation.component';
import { OperationIntroComponent } from './pages/Home/operation_intro.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TreeNode } from './_Shared/tree-node/tree-node.component';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,
    BannerComponent,
    PartnerComponent,
    FooterComponent,
    FieldOperationsComponent,
    ProjectsComponent,
    ProductsComponent,
    WhyChossingUsComponent,
    TechnologyComponent,
    CustomersComponent,
    HomeComponent,
    AboutComponent,
    VisionComponent,
    AboutNavleftComponent,
    StructureComponent,
    PolicyComponent,
    PhilosophyComponent,
    PriceComponent,
    SupportComponent,
    ContactUsComponent,
    ERPComponent,
    QLCHComponent,
    KDXDComponent,
    QLKhoComponent,
    PriceERPComponent,
    PriceKDXDComponent,
    PriceQLCHComponent,
    PriceQLKhoComponent,
    HotNewsComponent,
    News_DetailsComponent,
    Project_DetailsComponent,
    IntroComponent,
    OperationComponent,
    OperationIntroComponent,
    TreeNode
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CommonModule,
    HttpClientModule,
    SwiperModule,
    CarouselModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
