import { Injectable } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class MerchantServiceWorker {
  constructor(private swUpdate: SwUpdate) {}

  isEnabled() {
    return this.swUpdate.isEnabled;
  }

  registerVersionUpdate() {
    if (this.isEnabled()) {
      this.swUpdate.versionUpdates.subscribe({
        next: (event: VersionEvent) => {
          switch (event.type) {
            case 'VERSION_DETECTED':
              if (confirm('New Version Detected. Load New Verison')) {
                window.location.reload();
              }
              break;
            case 'VERSION_READY':
              break;
            case 'NO_NEW_VERSION_DETECTED':
              break;
            case 'VERSION_INSTALLATION_FAILED':
              break;
          }
        },
      });
    }
  }
}
