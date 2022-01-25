import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactWrapperComponent } from './common/components/react-wrapper/react-wrapper.component';

@NgModule({
  declarations: [AppComponent, ReactWrapperComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'angular-content',
          loadChildren: () =>
            import('angular-content/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'react-content',
          component: ReactWrapperComponent,
          data: {
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            remoteName: 'reactcontent',
            exposedModule: './Main',
            elementName: 'reactcontent-element'
          },
        },
      ],
      { relativeLinkResolution: 'legacy' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
