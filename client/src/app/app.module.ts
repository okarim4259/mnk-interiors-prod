import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { InViewportModule } from "ng-in-viewport";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppRouterModule } from "./app-modules/app-router/app-router.module";
import { BannerComponent } from "./components/home/banner/banner.component";

import { FooterComponent } from "./components/footer/footer.component";
import { ApiService } from "./services/data/api.service";
import { HomeComponent } from "./components/home/home.component";
import { BestSellersComponent } from "./components/home/best-sellers/best-sellers.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    BestSellersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouterModule,
    InViewportModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
