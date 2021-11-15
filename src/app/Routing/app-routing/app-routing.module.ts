import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from 'src/app/components/orders/orders.component';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { RevenueComponent } from 'src/app/components/revenue/revenue.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ManageMenusComponent } from 'src/app/components/manage-menus/manage-menus.component';
import { EditMenuComponent } from 'src/app/components/manage-menus/edit-menu/edit-menu.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'revenue', component: RevenueComponent },
  { path: 'home', component: HomeComponent },
  { path: 'managemenus', component: ManageMenusComponent },
  { path: 'editmenu', component: EditMenuComponent },
  { path: 'addmenu', component: EditMenuComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
