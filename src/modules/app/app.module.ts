import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
  declarations: [DemoComponent, HelloWorldComponent],
  imports: [BrowserModule, AppRoutingModule, HomeComponent],
  providers: [],
  bootstrap: [DemoComponent, HelloWorldComponent],
})
export class AppModule {}
