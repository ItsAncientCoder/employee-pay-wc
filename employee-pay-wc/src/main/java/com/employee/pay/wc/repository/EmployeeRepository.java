package com.employee.pay.wc.repository;

import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

	Employee save(Employee employee);

}
