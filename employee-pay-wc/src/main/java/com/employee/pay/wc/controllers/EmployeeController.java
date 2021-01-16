package com.employee.pay.wc.controllers;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.pay.wc.repository.Employee;
import com.employee.pay.wc.repository.EmployeeRepository;
import com.employee.pay.wc.repository.Salary;
import com.employee.pay.wc.repository.SalaryRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
//@RequestMapping(value = "/employee")
@Api(value = "employeeApi", description = "The Permissions API")
@CrossOrigin
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private SalaryRepository salaryRepository;

	@ApiOperation(value = "Gets employee data", notes = "", response = List.class, tags = {
			"Employee" }, responseContainer = "List")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successful Operation", response = List.class),
			@ApiResponse(code = 400, message = "Invalid Input", response = Void.class),
			@ApiResponse(code = 404, message = "User not found", response = Void.class) })
	@GetMapping(path = "/employees", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Employee>> fetchAll() {
		List<Employee> employees = (List<Employee>) employeeRepository.findAll();
		return new ResponseEntity<>(employees, HttpStatus.OK);
	}

	@GetMapping(path = "/employee/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
		Optional<Employee> employee = employeeRepository.findById(id);
		if (!employee.isPresent()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(employee.get(), HttpStatus.OK);
	}

	@PostMapping(path = "/employee", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Employee> saveEmployee(Employee emp) {
		Employee savedEmployee = employeeRepository.save(emp);
		System.out.println("*******************" + emp.getId());
		return new ResponseEntity<>(savedEmployee, HttpStatus.OK);
	}

	@GetMapping(path = "/salary/{employeeId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Salary>> getSalaryByEmpId(@PathVariable("employeeId") Long employeeId) {
		List<Salary> salaries = salaryRepository.findByEmployeeId(employeeId);
		if (null != salaries && salaries.size() > 0) {
			salaries.sort(Comparator.comparing(Salary::getYear));
		}
		return new ResponseEntity<List<Salary>>(salaries, HttpStatus.OK);
	}

}
