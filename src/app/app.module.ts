import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalsComponent } from './components/modals/modals.component';
import { NavbarLinkComponent } from './components/navbar-link/navbar-link.component';
import { SectionDirective } from './directives/section.directive';
import { PortfolioImgComponent } from './components/portfolio-img/portfolio-img.component';
import { ModalService } from "./service/modal.service";
import { NavLinkService } from "./service/nav-link-service.service";
import { HomeComponent } from './pages/home/home.component';
import { NavLinkActivationDirective } from './directives/nav-link-activation.directive';
import { NavbarService } from "./service/navbar.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ModalsComponent,
    NavbarLinkComponent,
    SectionDirective,
    PortfolioImgComponent,
    HomeComponent,
    NavLinkActivationDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [ ModalService, NavLinkService, NavbarService],
  bootstrap: [AppComponent]
})

export class AppModule { }
