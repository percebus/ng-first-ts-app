import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../routing/app-routing.module';
import { DemoComponent } from './components/demo/demo.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [DemoComponent, HelloWorldComponent],
  providers: [],
  bootstrap: [DemoComponent],
})
export class AppModule {}
