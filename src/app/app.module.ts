import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
