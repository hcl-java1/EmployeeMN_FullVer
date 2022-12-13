package com.ms.domain;

import javax.persistence.*;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "employee")
public class Employee {
	@Id
	@GeneratedValue()
	private int eno;
	@Column
	private String ename;
	@Column
	private String email;
	@Column
	private String phone;
	@Column
	private String address;
	@Column
	private String dept;

	public int getEno() {
		return eno;
	}

	public void setEno(int eno) {
		this.eno = eno;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public Employee() {
		super();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Employee [eno=" + eno + ", ename=" + ename + ", email=" + email + ", phone=" + phone + ", address="
				+ address + ", dept=" + dept + "]";
	}

	public Employee(int eno, String ename, String email, String phone, String address, String dept) {
		super();
		this.eno = eno;
		this.ename = ename;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.dept = dept;
	}

}