import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routes from './app/routes/config';
import { RootComponent } from './app/components/root/root.component';

bootstrapApplication(RootComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routes)],
}).catch((err) => console.error(err));
