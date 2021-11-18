import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from 'src/app/components/orders/orders.component';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { RevenueComponent } from 'src/app/components/revenue/revenue.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ManageMenusComponent } from 'src/app/components/manage-menus/manage-menus.component';
import { EditMenuComponent } from 'src/app/components/manage-menus/edit-menu/edit-menu.component';
import { CustomOrderComponent } from 'src/app/components/custom-order/custom-order.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'revenue', component: RevenueComponent },
  { path: '', component: HomeComponent },
  { path: 'managemenus', component: ManageMenusComponent },
  { path: 'editmenu', component: EditMenuComponent },
  { path: 'addmenu', component: EditMenuComponent },
  { path: 'customorder', component: CustomOrderComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
