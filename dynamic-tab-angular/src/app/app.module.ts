import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTabsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatRadioModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { TabContentComponent } from "./tab-content.component";
import { ContentContainerDirective } from "./content-container.directive";
import { TabService } from "./tab.service";
import { Comp1Component } from "./components/comp1.component";
import { Comp2Component } from "./components/comp2.component";
import { HomeComponent } from "./components/home/home.component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CsvModule } from "@ctrl/ngx-csv";

@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    ContentContainerDirective,
    Comp1Component,
    Comp2Component,
    HomeComponent,
    EmployeeDetailsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    NgxDatatableModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    CsvModule
  ],
  providers: [TabService],
  bootstrap: [AppComponent],
  entryComponents: [Comp1Component, Comp2Component, HomeComponent, EmployeeDetailsComponent]
})
export class AppModule { }
