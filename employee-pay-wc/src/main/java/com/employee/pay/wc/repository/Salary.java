package com.employee.pay.wc.repository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PAY_DETAILS")
public class Salary {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long employeeId;

	private Month month;

	private int year;

	private float salaryPerMonth;

	private float pf;

	private float da;

	private float hra;

	private float gross;

	private int noOfDaysPresent;

	private int pt;

	private int netSalary;

	public float getPf() {
		return pf;
	}

	public void setPf(float pf) {
		this.pf = pf;
	}

	public float getDa() {
		return da;
	}

	public void setDa(float da) {
		this.da = da;
	}

	public float getHra() {
		return hra;
	}

	public void setHra(float hra) {
		this.hra = hra;
	}

	public float getGross() {
		return gross;
	}

	public void setGross(float gross) {
		this.gross = gross;
	}

	public int getNoOfDaysPresent() {
		return noOfDaysPresent;
	}

	public void setNoOfDaysPresent(int noOfDaysPresent) {
		this.noOfDaysPresent = noOfDaysPresent;
	}

	public int getPt() {
		return pt;
	}

	public void setPt(int pt) {
		this.pt = pt;
	}

	public int getNetSalary() {
		return netSalary;
	}

	public void setNetSalary(int netSalary) {
		this.netSalary = netSalary;
	}

	public float getSalaryPerMonth() {
		return salaryPerMonth;
	}

	public void setSalaryPerMonth(float salaryPerMonth) {
		this.salaryPerMonth = salaryPerMonth;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public Month getMonth() {
		return month;
	}

	public void setMonth(Month month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public Salary() {
		super();
	}

	public Salary(Long employeeId, Month month, int year, float salaryPerMonth, float pf, float da, float hra,
			float gross, int noOfDaysPresent, int pt, int netSalary) {
		super();
		this.employeeId = employeeId;
		this.month = month;
		this.year = year;
		this.salaryPerMonth = salaryPerMonth;
		this.pf = pf;
		this.da = da;
		this.hra = hra;
		this.gross = gross;
		this.noOfDaysPresent = noOfDaysPresent;
		this.pt = pt;
		this.netSalary = netSalary;
	}

}
