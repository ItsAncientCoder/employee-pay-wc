import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Employee } from 'src/app/advancedSearch';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  rows = [];

  ColumnMode = ColumnMode;

  employeeId = '';

  constructor(private http: HttpClient) {

  }

  columns = [
    { name: 'Salary Id', prop: 'id', width: 100 }, { name: 'Month', prop: 'month', width: 125 },
    { name: 'Year', prop: 'year', width: 100 }, { name: 'Salary Per Month', prop: 'salaryPerMonth', width: 150 },
    { name: 'PF', prop: 'pf', width: 100 }, { name: 'DA', prop: 'da', width: 100 },
    { name: 'HRA', prop: 'hra', width: 125 }, { name: 'GROSS', prop: 'gross', width: 75 },
    { name: 'No.Of Days Present', prop: 'noOfDaysPresent', width: 150 },
    { name: 'PT', prop: 'pt', width: 100 }, { name: 'Net Salary', prop: 'netSalary', width: 100 }];

  ngOnInit(): void {
    console.log('onInit(): ', this.data);
    const employee = this.data.employee;
    this.employeeId = employee.id;
    this.form.setValue({
      employeeId: employee.id,
      fullName: employee.fullName,
      gender: employee.gender,
      dob: employee.dob,
      doj: employee.doj,
      pan: employee.pan,
      qualification: employee.qualification,
      email: employee.email
    });

    // this.fetch(data => {
    //   this.rows = data;
    // });

    this.http.get<any>('http://localhost:5000/salary/' + this.data.employee.id).subscribe(
      response => {
        console.log(response);
        this.rows = response;
      }, error => {
        console.log(error);
      }
    );
  }

  genderList = ['MALE', 'FEMALE'];
  isFormEditInProgress = false;

  @Input() data;
  form: FormGroup = new FormGroup({

    employeeId: new FormControl({ value: '', disabled: true }, Validators.required),
    fullName: new FormControl({ value: '', disabled: true }, Validators.required),
    gender: new FormControl({ value: this.genderList[0], disabled: true }, Validators.required),
    dob: new FormControl({ value: '', disabled: true }, [Validators.required]),
    doj: new FormControl({ value: '', disabled: true }, [Validators.required]),
    pan: new FormControl({ value: '', disabled: true }, Validators.required),
    qualification: new FormControl({ value: '', disabled: true }, Validators.required),
    email: new FormControl({ value: '', disabled: true }, Validators.email),
  });

  editForm(action) {
    console.log('Inside editForm() FORM = ', this.form);
    if (action === 'edit') {
      this.isFormEditInProgress = true;
      this.form.controls.fullName.enable();
      this.form.controls.gender.enable();
      this.form.controls.dob.enable();
      this.form.controls.doj.enable();
      this.form.controls.pan.enable();
      this.form.controls.qualification.enable();
      this.form.controls.email.enable();
    } else {
      this.isFormEditInProgress = false;
      this.form.controls.fullName.disable();
      this.form.controls.gender.disable();
      this.form.controls.dob.disable();
      this.form.controls.doj.disable();
      this.form.controls.pan.disable();
      this.form.controls.qualification.disable();
      this.form.controls.email.disable();
    }
  }

  submit() {
    if (!this.form.valid) {
      return;
    }

    // console.log();

    // this.http.post<any>('http://localhost:5000/employee', this.form.value).subscribe(
    //   response => {
    //     console.log('POST response =', response);
    //   }, error => {
    //     console.log('POST error response =', error);
    //   }
    // );

    this.isFormEditInProgress = false;
    this.form.controls.fullName.disable();
    this.form.controls.gender.disable();
    this.form.controls.dob.disable();
    this.form.controls.doj.disable();
    this.form.controls.pan.disable();
    this.form.controls.qualification.disable();
    this.form.controls.email.disable();
    console.log(this.form.value);
  }

}
