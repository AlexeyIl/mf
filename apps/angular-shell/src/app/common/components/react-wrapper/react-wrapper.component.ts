import { AfterContentInit, Component, ElementRef } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import * as ReactDOM from 'react-dom';
import { take } from "rxjs";
import { loadRemoteModule } from "@angular-architects/module-federation";

@Component({
  selector: 'react-wrapper',
  template: '',
  styles: [":host {height: 100%; overflow: auto;}"]
})
export class ReactWrapperComponent implements AfterContentInit {
  constructor(private hostRef: ElementRef,
              private route: ActivatedRoute) {}
  async ngAfterContentInit(): Promise<void> {
    this.route.data
      .pipe(take(1))
      .subscribe(async (data: Data) => {
        const configuration: any = data['configuration'];
        const component = await loadRemoteModule({
          remoteEntry: configuration.remoteEntry,
          remoteName: configuration.remoteName,
          exposedModule: configuration.exposedModule
        });
        const ReactMFEModule = component[configuration.moduleName];
        const hostElement = this.hostRef.nativeElement;
        //@ts-ignore
        ReactDOM.render(<ReactMFEModule/>, hostElement);
      })
  }
}