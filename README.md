# JobSearchApp

## Introduction to JobSearchApp
JobSearch App is a candidate driven job search app. 

### How it works: 
When users open the app they have the ability to identify themselves as either a candidate or an employer. Each type of user is then directed to a specific form to fill out. In this form candidates identify the role they want and employers identify the type of candidate they're looking for. We then algorithmize based off the candidates' and employers' responses to determine an optimal match. The app then delivers a contact form for the two parties to start a conversation.  

### Here are the forms:

Candidate Form
``` 
1. What department are you looking for a role in?
  1 - Business
  2 - HR / Admin
  3 - Engineering
  4 - Marketing

2. What company size do you want to work for?
  1 - Small
  2 - Medium
  3 - Large
  4 - Huge

3. What company maturity level do you want to work for?
  1 - Early stage start-up
  2 - Established start-up
  3 - Large corporations
  4 - Open to anything

4. Which of the below best describes the office culture you enjoy?
  1 - Casual
  2 - Formal
  3 - Relaxed
  4 - Fast Paced

5. Describe the seniority level of role you're looking for:
  1 - Entry level
  2 - Junior
  3 - Mid
  4 - Senior

6. What is your salary range?
  1 - $20k - $50k
  2 - $50k - $100k
  3 - $100k - $150k+
  4 - Open to anything
 
7. What type of role are you looking for?
  1 - Full Time
  2 - Part Time
  3 - Contract
  4 - Internship

8. When is the earliest you can start?
  1 - As soon as possible
  2 - Two weeks
  3 - At least a month out
  4 - Undecided
   
9. Is having upward mobility important to you?
  1 - Yes
  2 - No

10. Is it important to you that the company has international offices?
  1 - Yes
  2 - No

11. Write a brief intro about yourself to potential employers (500 character max):

```

Employer Form
``` 
1. What department are you looking to hire for?
  1 - Business
  2 - HR / Admin
  3 - Engineering
  4 - Marketing

2. What is your company's size?
  1 - Small
  2 - Medium
  3 - Large
  4 - Huge

3. What is your company's maturity level?
  1 - Early stage start-up
  2 - Established start-up
  3 - Large corporations
  4 - Open to anything

4. Which of the below best describes the office culture at your company?
  1 - Casual
  2 - Formal
  3 - Relaxed
  4 - Fast Paced

5. Describe the seniority level of role you're hiring for:
  1 - Entry level
  2 - Junior
  3 - Mid
  4 - Senior

6. What is the salary range of the role?
  1 - $20k - $50k
  2 - $50k - $100k
  3 - $100k - $150k+
  4 - Open to anything
 
7. What type of role are you hiring for?
  1 - Full Time
  2 - Part Time
  3 - Contract
  4 - Internship

8. When is the earliest you'd like your new hire to start?
  1 - As soon as possible
  2 - Two weeks
  3 - At least a month out
  4 - Undecided
   
9. Is upward mobility available for this role?
  1 - Yes
  2 - No

10. Is international exposure available for this role?
  1 - Yes
  2 - No

```


## Dependencies
* Javascript
* CSS 
* Bootstrap
* Node JS
* MySQL
* Npm packages (express, mysql, body-parser, sequelize)
* Handlebars
