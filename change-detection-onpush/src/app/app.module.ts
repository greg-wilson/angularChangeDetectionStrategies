import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { SummaryComponent } from './summary/summary.component';
import { DetailsComponent } from './details/details.component';
import { CostBasisComponent } from './cost-basis/cost-basis.component';
import { ChartComponent } from './chart/chart.component';
import { DeltaComponent } from './delta/delta.component';
import { EchoComponent } from './echo/echo.component';
import { NamePipe } from './name.pipe';
import { TickerComponent } from './ticker/ticker.component';
import { ValuePipe } from './value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DetailsComponent,
    CostBasisComponent,
    ChartComponent,
    DeltaComponent,
    EchoComponent,
    NamePipe,
    TickerComponent,
    ValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
