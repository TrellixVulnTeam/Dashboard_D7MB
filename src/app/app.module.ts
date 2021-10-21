import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDatepickerModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DateAdapterService } from './services/Date/date-adapter/date-adapter.service';
import { DateParserformatterService } from './services/Date/date-parserformatter/date-parserformatter.service';
import { DateFrService } from './services/Date/date-fr/date-fr.service';
import { GraphiqueComponent } from './components/test/graphique/graphique.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BartChartComponent } from './components/bart-chart/bart-chart.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { SellingTableComponent } from './components/selling-table/selling-table.component';
import { SellingTableLineComponent } from './components/selling-table-line/selling-table-line.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { ProductService } from './services/products/product.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DatepickerComponent,
    GraphiqueComponent,
    LineChartComponent,
    BartChartComponent,
    StatCardComponent,
    SellingTableComponent,
    SellingTableLineComponent,
    DropdownMenuComponent,
    AuthViewComponent,
    ErrorsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgChartsModule
  ],
  providers: [
    DateAdapterService,
    DateParserformatterService,
    DateFrService,
    ProductService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
