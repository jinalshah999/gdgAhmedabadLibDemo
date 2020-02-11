import { NgModule } from '@angular/core';
import { DemoLibComponent } from './demo-lib.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [DemoLibComponent, CounterComponent],
  imports: [
  ],
  exports: [DemoLibComponent,CounterComponent]
})
export class DemoLibModule { }
