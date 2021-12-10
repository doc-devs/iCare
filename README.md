# iCare

Urgent care patient queue system

## Team members

- Lorenzo Ortega
- Ayrat Gimranov
- Mark Thanadabouth

## Domain Modeling

![uml](/images/uml.jpeg)

## Routes

[authRoutes](src/auth/authRoute.js)

Where user : Nurse, Doctor, Admin

<pre>
GET   /               home (P.O.L.)
POST  /signup         create a user
POST  /signin         signin with basic auth
GET   /users          retrieve all users, need permissions
DEL   /users          delete one users, need permissions
</pre>

Optional Protected [patient routes](src/routes/v1.js)
(if want to persist patient information)

<pre>
GET   /               home (P.O.L.)
GET   /:patient        get all patients
GET   /:patient/:id     get one patient
POST  /:patient :       create one patient
PUT   /:patient/:id     update one patient
DEL   /:patient/:id     delete one patient
</pre>

## Project Description

An app that can be used by front desk RN of an emergency department to accept and assign walk-in patients into queues based on priority of their symptoms.

## User Stories

Feature Tasks:

- " As a Nurse, I want to be able to create a new account, so that I can have Nurse-permission's for queue system"
- " As a Physician, I want to be able to create a new account, so that I can have Physician-permission's for queue system"
- " As a Nurse, I want input arriving patient information, so that I can queue them-up for the Physician "
- " As a Physician, I want to process patients based on priority-level, so that I can create a treat-plan "
- " As a Nurse, I want to be able to move patients to another queue, so that if the patient's condition worsens they can be seen faster"

## Software Requirements

[click Here](./requirements.md)