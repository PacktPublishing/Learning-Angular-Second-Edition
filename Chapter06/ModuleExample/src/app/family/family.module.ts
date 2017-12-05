import { GranddadComponent } from './grandad.component';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child.component';
import { FatherComponent } from './father.component';

@NgModule({
  imports: [],
  exports: [GranddadComponent],
  declarations: [ChildComponent, FatherComponent, GranddadComponent],
  providers: [],
})
export class FamilyModule { }
