import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppRouterModule } from "./app-modules/app-router/app-router.module";
import { BannerComponent } from "./components/home/banner/banner.component";
import { MainHomeComponent } from "./components/home/main-home/main-home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ApiService } from "./services/data/api.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    MainHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouterModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
