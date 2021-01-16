package com.employee.pay.wc.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SalaryRepository extends CrudRepository<Salary, Long> {
	
	public List<Salary> findByEmployeeId(Long employeeId);
}
