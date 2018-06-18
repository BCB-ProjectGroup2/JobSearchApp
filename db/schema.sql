CREATE DATABASE jobsearch_db;

USE jobsearch_db;

CREATE TABLE Candidates
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
  upward_mobility int NOT NULL,
  international_offices int NOT NULL,
  about_me varchar (500) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Employers
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
  upward_mobility int NOT NULL,
  international_offices int NOT NULL,
	PRIMARY KEY (id)
);


