import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminProductListComponent } from "./admin-product-list/admin-product-list.component";
import { AdminProductCreateComponent } from "./admin-product-create/admin-product-create.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "product-list",
    component: AdminProductListComponent,
  },
  {
    path: "product-create",
    component: AdminProductCreateComponent,
  }
];

@NgModule({
  declarations: [AdminProductListComponent, AdminProductCreateComponent],
  imports: [CommonModule,RouterModule.forChild(routes)],
})
export class AdminModule {}
