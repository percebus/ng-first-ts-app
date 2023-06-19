import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { DemoComponent } from './modules/demo/demo.component';
import { HelloWorldComponent } from './modules/hello-world/hello-world.component';

@NgModule({
  declarations: [DemoComponent, HelloWorldComponent],
  imports: [BrowserModule, AppRoutingModule, HomeComponent],
  providers: [],
  bootstrap: [DemoComponent],
})
export class AppModule {}
