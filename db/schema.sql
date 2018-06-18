CREATE DATABASE jobsearch_db;

USE jobsearch_db;

CREATE TABLE candidates
(
	id int NOT NULL AUTO_INCREMENT,
	candidate_name varchar(50) NOT NULL,
  department_name int NOT NULL,
  company_size int NOT NULL,
  company_maturity int NOT NULL,
  office_culture int NOT NULL,
  role_seniority int NOT NULL,
  role_type int NOT NULL,
  salary_range int NOT NULL,
  start_time int NOT NULL,
  upward_mobility int,
  international_offices int,
  about_me varchar (500) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE employers
(
	id int NOT NULL AUTO_INCREMENT,
  employer_name varchar(50) NOT NULL, 
	department_name int NOT NULL,
  company_size int NOT NULL,
  company_maturity int NOT NULL,
  office_culture int NOT NULL,
  role_seniority int NOT NULL,
  role_type int NOT NULL,
  salary_range int NOT NULL,
  start_time int NOT NULL,
  upward_mobility INTEGER,
  international_offices INTEGER,
	PRIMARY KEY (id)
);


