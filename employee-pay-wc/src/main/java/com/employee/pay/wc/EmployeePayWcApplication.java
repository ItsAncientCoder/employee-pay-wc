package com.employee.pay.wc;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.employee.pay.wc.repository.Employee;
import com.employee.pay.wc.repository.EmployeeRepository;
import com.employee.pay.wc.repository.GENDER;
import com.employee.pay.wc.repository.Month;
import com.employee.pay.wc.repository.Salary;
import com.employee.pay.wc.repository.SalaryRepository;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class EmployeePayWcApplication {

	private static final Logger log = LoggerFactory.getLogger(EmployeePayWcApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(EmployeePayWcApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(EmployeeRepository employeeRepository, SalaryRepository salaryRepository) {
		return (args) -> {

			Employee employee = new Employee("Mark Jucker", GENDER.MALE, LocalDate.now().minusYears(40).minusMonths(10),
					LocalDate.now().minusYears(15).minusDays(30), "P.hd", "PLO943456", "mark.jucker@gmail.com");
			employee = employeeRepository.save(employee);

			Set<Salary> salaries = new HashSet<>();
			Salary salary = new Salary(employee.getId(), Month.NOVEMBER, 2020, 15000f, 350f, 200f, 120000f, 90000f, 30,
					5000, 150000);
			salaries.add(salary);
			salary = new Salary(employee.getId(), Month.DECEMBER, 2021, 12000f, 90f, 220f, 160000f, 90000f, 30, 5000,
					250000);
			salaries.add(salary);
			salary = new Salary(employee.getId(), Month.JANUARY, 2021, 22212f, 912f, 233f, 54578f, 23000f, 30, 4553,
					340000);
			salaries.add(salary);
			salaryRepository.saveAll(salaries);

			employee = new Employee("Elon Musk", GENDER.MALE, LocalDate.now().minusYears(63).minusDays(1),
					LocalDate.now().minusYears(25).minusDays(10), "M.BA", "UYD564874", "elon.musk@gmail.com");
			employee = employeeRepository.save(employee);
			salaries = new HashSet<>();
			salary = new Salary(employee.getId(), Month.NOVEMBER, 2020, 25000f, 150f, 260f, 180000f, 93000f, 30, 9635,
					1900000);
			salaries.add(salary);
			salary = new Salary(employee.getId(), Month.DECEMBER, 2021, 25000f, 150f, 260f, 180000f, 93000f, 30, 6890,
					8945000);
			salaries.add(salary);
			salary = new Salary(employee.getId(), Month.JANUARY, 2021, 12345f, 150f, 260f, 123330f, 94560f, 30, 8980,
					9635100);
			salaries.add(salary);
			salaryRepository.saveAll(salaries);

			employee = new Employee("Bandham Manikanta", GENDER.MALE, LocalDate.now().minusYears(26).minusDays(4),
					LocalDate.now().minusYears(10).minusDays(9), "B.Tech", "CDS123456", "bandham.manikanta@gmail.com");
			employee = employeeRepository.save(employee);
			salaries = new HashSet<>();
			salary = new Salary(employee.getId(), Month.NOVEMBER, 2020, 34000f, 350f, 400f, 320000f, 90000f, 30, 7700,
					110000);
			salaries.add(salary);
			salary = new Salary(employee.getId(), Month.DECEMBER, 2021, 12321f, 456f, 788f, 45678f, 65988f, 30, 9810,
					789656);
			salaries.add(salary);
			salary = new Salary(employee.getId(), Month.JANUARY, 2021, 12345f, 150f, 260f, 123330f, 94560f, 30, 8980,
					9635100);
			salaries.add(salary);
			salaryRepository.saveAll(salaries);

			employee = new Employee("Eligibeth Bauer", GENDER.FEMALE, LocalDate.now().minusYears(60).minusDays(9),
					LocalDate.now().minusYears(45).minusDays(7), "CA", "OYE1897786", "eligibeth.bauer@gmail.com");
			employee = employeeRepository.save(employee);
			salaries = new HashSet<>();
			salary = new Salary(employee.getId(), Month.NOVEMBER, 2020, 77000f, 110f, 911f, 540000f, 90000f, 30, 5000,
					150000);
			salaries.add(salary);
			salary = new Salary(employee.getId(), Month.DECEMBER, 2021, 17000f, 293f, 617f, 240000f, 45987f, 30, 5876,
					170000);
			salaries.add(salary);
			salary = new Salary(employee.getId(), Month.JANUARY, 2021, 12345f, 150f, 260f, 123330f, 94560f, 30, 8980,
					9635100);
			salaries.add(salary);
			salaryRepository.saveAll(salaries);

			log.info("-------------------------------");
			for (Employee customer : employeeRepository.findAll()) {
				log.info(customer.toString());
			}
			log.info("-------------------------------");

			log.info("-------------------------------");
			for (Salary sal : salaryRepository.findAll()) {
				log.info(sal.toString());
			}
			log.info("-------------------------------");
		};
	}

//	@Bean
//	public Docket productApi() {
//		return new Docket(DocumentationType.SWAGGER_2).select()
//				.apis(RequestHandlerSelectors.basePackage("com.employee.pay.wc")).build();
//	}
}
