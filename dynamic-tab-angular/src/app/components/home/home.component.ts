import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Tab } from 'src/app/tab.model';
import { TabService } from 'src/app/tab.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() data;
  rows = [];

  ColumnMode = ColumnMode;

  columns = [
    { name: 'Employee Id', prop: 'id', width: 150 }, { name: 'Full Name', prop: 'fullName', width: 200 },
    { name: 'Gender', prop: 'gender', width: 125 }, { name: 'DOB', prop: 'dob', datatype: 'date', width: 250 },
    { name: 'DOJ', prop: 'doj', datatype: 'date', width: 250 }, { name: 'PAN', prop: 'pan', width: 150 },
    { name: 'Qualification', prop: 'qualification', width: 150 }];

  constructor(private tabService: TabService, private http: HttpClient) {
    this.fetchEmployeesData();
  }

  ngOnInit() {
  }

  fetchEmployeesData() {
    this.http.get<any>('http://localhost:5000/employees').subscribe(
      response => {
        console.log(response);
        this.rows = response;
      }, error => {
        console.log(error);
      }
    );
  }

  onActivate(event) {
    console.log(event);
    if (event.type == "dblclick") {
      const tab = new Tab(EmployeeDetailsComponent, event.row.fullName, { employee: event.row });
      this.tabService.addTab(tab);
    }
  }

}
