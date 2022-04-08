import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsListService } from './services/cats-list.service';
import { CatsListComponent } from './cats-list/cats-list.component';

@NgModule({
  declarations: [AppComponent, CatsListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CatsListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
