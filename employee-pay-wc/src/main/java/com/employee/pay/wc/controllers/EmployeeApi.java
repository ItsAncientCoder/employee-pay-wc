package com.employee.pay.wc.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.employee.pay.wc.repository.Employee;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "employeeApi", description = "The Permissions API")
public interface EmployeeApi {

	@ApiOperation(value = "Gets employee data", notes = "", response = List.class, tags = {
			"Employee" }, responseContainer = "List")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successful Operation", response = List.class),
			@ApiResponse(code = 400, message = "Invalid Input", response = Void.class),
			@ApiResponse(code = 404, message = "User not found", response = Void.class) })
	ResponseEntity<List<Employee>> fetchAll();

}
