import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MultistepModule } from './multistep.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(MultistepModule);