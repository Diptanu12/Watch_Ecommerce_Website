import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListproductComponent } from './productdetails/listproduct/listproduct.component';
import { CustomerpanelComponent } from './customerdashboard/customerpanel/customerpanel.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfoundcomp/pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './categorydetails/category/category.component';
import { AdminpanelComponent } from './admindashboard/adminpanel/adminpanel.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { MoreComponent } from './features/more/more.component';
import { WatchesComponent } from './watches/watches.component';
import { AboutComponent } from './about/about.component';
import { MainhomecompComponent } from './mainhomecomp/mainhomecomp.component';
import { HeadersectionComponent } from './headersection/headersection.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { WatchgallaryComponent } from './watchgallary/watchgallary.component';
import { PartnersComponent } from './partners/partners.component';
import { MapsectionComponent } from './mapsection/mapsection.component';
import { VideoclipComponent } from './videoclip/videoclip.component';
import { FAQComponent } from './faq/faq.component';
import { FullaboutComponent } from './fullabout/fullabout.component';
import { MorewComponent } from './watchgallary/morew/morew.component';
import { TermsComponent } from './terms/terms.component';
import { MapComponent } from './map/map.component';











@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ListproductComponent,
    CustomerpanelComponent,
    AdminpanelComponent,
    PagenotfoundComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ClientsComponent,
    ContactComponent,
    FeaturesComponent,
    MoreComponent,
    WatchesComponent,
    AboutComponent,
    MainhomecompComponent,
    HeadersectionComponent,
    UserloginComponent,
    WatchgallaryComponent,
    PartnersComponent,
    MapsectionComponent,
    VideoclipComponent,
    FAQComponent,
    FullaboutComponent,
    MorewComponent,
    TermsComponent,
    MapComponent,

  
   
 

    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,RouterModule.forRoot([
        {path:"admin",component:AdminpanelComponent},
        {path:"userlogin",component:UserloginComponent},
        {path:"customer",component:CustomerpanelComponent},
        { path: 'home', component: HomeComponent },
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
        {path:'about', component:AboutComponent},
        {path:'clients', component:ClientsComponent},
        {path:'gallary', component:WatchgallaryComponent},
        {path:'contact', component:ContactComponent},
        {path:'watch', component:WatchesComponent},
        {path:'feature', component:FeaturesComponent},
        {path:'morefeature', component:MoreComponent},
        {path:'sliderheader', component:HeadersectionComponent},
        {path:'faq', component:FAQComponent},
        {path:'fullabout', component:FullaboutComponent},
        {path:'term', component:TermsComponent},
        {path:'morew', component:MorewComponent},
        { path: '', component: MainhomecompComponent },
  
  ])
  ],
  providers: [HttpClientModule,   {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
