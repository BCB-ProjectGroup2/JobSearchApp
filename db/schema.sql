CREATE DATABASE jobsearch_db;

USE jobsearch_db;

CREATE TABLE employees
(
	id int NOT NULL AUTO_INCREMENT,
    
	employee_name varchar(255) NOT NULL,
	department_name varchar(255) NOT NULL,

  company_size varchar(255) NOT NULL,
  company_maturity varchar(255) NOT NULL,
  office_culture varchar(255) NOT NULL,
  role_seniority varchar(255) NOT NULL,
  role_type varchar(255) NOT NULL,
  salary_range varchar(255) NOT NULL,
  start_time varchar(255) NOT NULL,
  upward_mobility INTEGER,
  international_offices INTEGER,
  about_me varchar (10000) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE employers
(
	id int NOT NULL AUTO_INCREMENT,
    employer_name varchar(255) NOT NULL,
	department_name varchar(255) NOT NULL,
  company_size varchar(255) NOT NULL,
  company_maturity varchar(255) NOT NULL,
  office_culture varchar(255) NOT NULL,
  role_seniority varchar(255) NOT NULL,
  role_type varchar(255) NOT NULL,
  salary_range varchar(255) NOT NULL,
  start_time varchar(255) NOT NULL,
  upward_mobility INTEGER,
  international_offices INTEGER,
	PRIMARY KEY (id)
    
    
);