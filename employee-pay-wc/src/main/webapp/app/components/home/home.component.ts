import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Tab } from '../../tab.model';
import { TabService } from '../../tab.service';
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

  columns = [{ name: 'Id', prop: 'id' }, { name: 'Full Name', prop: 'fullName' }, { name: 'Gender', prop: 'gender' }];

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
