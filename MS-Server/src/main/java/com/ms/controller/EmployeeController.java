package com.ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.ms.domain.Employee;
import com.ms.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class EmployeeController {
	@Autowired
	EmployeeService service;

	@PostMapping("/addEmployee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return service.saveEmployee(employee);
	}

	@PostMapping("/addEmployees")
	public List<Employee> addEmployees(@RequestBody List<Employee> employees) {
		return service.saveEmployees(employees);
	}

	
	
	@GetMapping("/employees")
	public List<Employee> findAllEmployees() {
		return service.getEmployees();
	}
	
	@GetMapping("/employees/page/_page={page}")
	public List<Employee> findPaginated(@PathVariable int page) {
		return service.findPaginated(page);
	}
	

	@GetMapping("/employeeById/{id}​​")
	public List<Employee> findEmployeeById(@PathVariable int id) {
		return service.getEmpById(id);
	}

//	@GetMapping("/employeeByName/{​​name}​​")
//	public List<Employee> findEmployeeById(@PathVariable String name) {
//		return service.getEmployeeByName(name);
//	}

	@DeleteMapping("/delete")
	public String deleteEmployee(@RequestParam int id) {
		System.out.println(id);
		return service.deleteEmployee(id);
	}

	@PutMapping("/update")
	public Employee updateEmployee(@RequestBody Employee employee) {
		return service.updateEmployee(employee);

	}

	@GetMapping("/employees/{city}/{dept}")
	public List<Employee> employeesByCityAndDept(@PathVariable String city, @PathVariable String dept) {
		return service.getEmployeesByCityAndDept(city, dept);
	}

	@GetMapping("/employees/{lastname}")
	public List<Employee> employeesByLastName(@PathVariable String lastname) {
		return service.getEmployeesByLastName(lastname);
	}

	@GetMapping("/search")
	public List<Employee> employeesById(@RequestParam String keyword) {
		return service.getEmployeeByIdOrName(keyword);
	}
}