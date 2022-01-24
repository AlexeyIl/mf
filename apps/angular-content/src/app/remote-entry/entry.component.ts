import { Component } from '@angular/core';

@Component({
  selector: 'mf-test-angular-content-entry',
  template: `<div class="remote-entry">
    <h2>Hello from angular-content</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
