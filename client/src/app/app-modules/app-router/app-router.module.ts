import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../../components/home/home.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule {}
