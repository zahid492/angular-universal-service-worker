import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-lazy-view',
  template: `<h3>i'm lazy on Change Version 3</h3>`
})
export class LazyComponent {}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

}
