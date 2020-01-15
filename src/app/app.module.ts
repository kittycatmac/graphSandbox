import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: GraphComponent },
      { path: 'c3graph', component: GraphComponent },
      { path: 'canvaschart', component: ChartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
