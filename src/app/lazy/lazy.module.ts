import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-lazy-view',
  template: `<h3>i'm lazy on Change Version 3</h3> <img src="https://cdn.selise.biz/slnetwork/assets/images/backgrounds/Login-bg.jpg" 
  alt="Smiley face" height="420" width="420">`
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
