package com.ms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ms.domain.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

		
		List<Employee> findByEname(String name);
		
		@Query(value = "SELECT * FROM employee e where e.city like %?1% AND e.dept like %?2%",nativeQuery=true)
		public List<Employee> findByCityAndDept(String city, String dept);
		
		@Query(value = "SELECT * FROM employee e where e.ename like :lastname%", nativeQuery = true)
		public List<Employee> findByLastName(@Param("lastname") String lastname);
		
		public List<Employee> findAllByOrderByEnoAsc();
		
		@Query(value = "SELECT * FROM(SELECT a.*, rownum r__ FROM(SELECT * FROM employee ORDER BY eno ) a WHERE rownum < ((?1 * 1) + 1 ))WHERE r__ >= (((?1-1) * 1) + 1)",nativeQuery=true)
		public List<Employee> EmployeePagination(int page);
		
		List<Employee> findByEno(int id);
		
		@Query(value = "SELECT * FROM employee  where eno = ?1",nativeQuery=true)
		public List<Employee> findAllById(int id);
		
		@Query(value="UPDATE Employee set ename = :ename, email = :email, address = :address, phone = :phone, dept = :dept WHERE eno = :eno",nativeQuery = true)
		public void updateEmp(String ename, String email, String address, String phone, String dept, int eno);
		
	
		
		
}
	