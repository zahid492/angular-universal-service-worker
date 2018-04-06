import { Injectable } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class UpdateService {
    constructor(private swUpdate: SwUpdate) {
        console.log('SW Incoming');
        if (this.swUpdate.isEnabled) {
            console.log('SW Enabled');
            this.swUpdate.available.subscribe(() => {
                console.log('SW Available');
              if (confirm('New version available. Load New Version?')) {
                window.location.reload();
              }
            });
          }
      }
}