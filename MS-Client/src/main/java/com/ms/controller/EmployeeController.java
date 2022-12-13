package com.ms.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.ms.domain.Employee;



@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class EmployeeController {
	@Autowired
	private DiscoveryClient discoveryClient;

	
	@GetMapping("/")
	public List<Employee> getAllEmployee(){
		List<ServiceInstance> instance=discoveryClient.getInstances("MS-Server");
		Employee[] listEm;
		List<Employee> emList=new ArrayList<>();
		if(instance!=null&&instance.size()>0) {
			ServiceInstance serviceInstance=instance.get(0);
			String url=serviceInstance.getUri().toString();
			url+="/employees";
			
			RestTemplate restTemplate=new RestTemplate();
			listEm = restTemplate.getForObject(url, Employee[].class);
			emList=Arrays.asList(listEm);

		}
		return emList;
	}
	
	@PostMapping("/updateEmployee")
	public void updateEmployee(@RequestBody Employee e) {
		List<ServiceInstance> instances=discoveryClient.getInstances("MS-Server");
		if(instances!=null&&instances.size()>0) {
			ServiceInstance serviceInstance=instances.get(0);
			String url=serviceInstance.getUri().toString();
			url+="/addEmployee";
			
			RestTemplate restTemplate=new RestTemplate();
			restTemplate.postForObject(url,e,Employee.class);
		}
	}
	
	@PostMapping("/addEmployee")
	public void addEmployee(@RequestBody Employee e) {
		List<ServiceInstance> instances=discoveryClient.getInstances("MS-Server");
		if(instances!=null&&instances.size()>0) {
			ServiceInstance serviceInstance=instances.get(0);
			String url=serviceInstance.getUri().toString();
			url+="/addEmployee";
			
			RestTemplate restTemplate=new RestTemplate();
			restTemplate.postForObject(url,e,Employee.class);
		}
	}
	@DeleteMapping("/delete")
	public void deleteEmployee(@RequestParam int id) {

		List<ServiceInstance> instances=discoveryClient.getInstances("MS-Server");
		if(instances!=null&&instances.size()>0) {
			ServiceInstance serviceInstance=instances.get(0);
			String url=serviceInstance.getUri().toString();
			
			url+="/delete?id="+id;

			RestTemplate restTemplate=new RestTemplate();
			restTemplate.delete(url);
		}
	}
	
	@GetMapping("/search")
	public List<Employee> search(@RequestParam String keyword){
		List<ServiceInstance> instances=discoveryClient.getInstances("MS-Server");
		Employee[] listSearch;
		List<Employee> e=new ArrayList<>();
		if(instances!=null&&instances.size()>0) {
			ServiceInstance serviceInstance=instances.get(0);
			String url=serviceInstance.getUri().toString();
			url+="/search?keyword="+keyword;
			
			RestTemplate restTemplate=new RestTemplate();
			listSearch=restTemplate.getForObject(url, Employee[].class);
			e=Arrays.asList(listSearch);
			
		}
		return e;
	}

}