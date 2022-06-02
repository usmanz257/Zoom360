import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LicenseManager } from 'ag-grid-enterprise';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

LicenseManager.setLicenseKey("CompanyName=T/A Shahnawaz Khan,LicensedApplication=ZOOM360,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=0,AssetReference=AG-011136,ExpiryDate=13_October_2021_[v2]_MTYzNDA3OTYwMDAwMA==14c8425f7c2d45e9b43eae226d6d2aaa")


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
