[![Website](https://img.shields.io/website?down_color=yellow&down_message=offline&label=iCare&logoColor=black&up_color=green&up_message=online&url=https%3A%2F%2Fii-care.herokuapp.com%2FuserPortal)](https://ii-care.herokuapp.com/userPortal) [![.github/workflows/js-tests.yml](https://github.com/doc-devs/iCare-V2/actions/workflows/js-tests.yml/badge.svg)](https://github.com/doc-devs/iCare-V2/actions/workflows/js-tests.yml) [![GitHub deployments](https://img.shields.io/github/deployments/doc-devs/iCare/ii-care?label=deployed&logo=heroku)](https://ii-care.herokuapp.com/userPortal) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/doc-devs/iCare/dev) [![GitHub](https://img.shields.io/github/license/doc-devs/iCare)](https://github.com/doc-devs/iCare/blob/22c1cac3b593d652020aa564590cc729ebd28426/LICENSE) [![GitHub](https://img.shields.io/badge/documentation-yes-blue)](https://github.com/doc-devs/iCare)

<h1 align="center"> Welcome to</h1>

![logo](./images/logo.png)
> An Urgent Care Patient Queue System

#### Project Description

An app that can be used by front desk RN of an emergency department to accept and assign walk-in patients into queues based on priority of their symptoms.

#### Team members

- Lorenzo Ortega
- Ayrat Gimranov
- Mark Thanadabouth

#### Domain Modeling

![uml](/images/iCare.jpg)

#### Deployments

🏠 [GitHub Organization Home](https://github.com/doc-devs)

💻 [iCare User Interface](https://github.com/doc-devs/TerminalUI)

💻 [iCare Server](https://github.com/doc-devs/iCare)

#### [Routes](src/auth/authRoute.js)

Where a User is a Nurse or Doctor

<pre>
GET   /userPortal     home
POST  /signup         create a user
POST  /signin         signin with basic auth
</pre>

#### User Stories

Feature Tasks:

- " As a Nurse, I want to be able to create a new account, so that I can have Nurse-permission's for queue system"
- " As a Physician, I want to be able to create a new account, so that I can have Physician-permission's for queue system"
- " As a Nurse, I want input arriving patient information, so that I can queue them-up for the Physician "
- " As a Physician, I want to process patients based on priority-level, so that I can create a treat-plan "
- " As a Nurse, I want to be able to move patients to another queue, so that if the patient's condition worsens they can be seen faster"

#### Software Requirements

[click here](./requirements.md) for software requirements

[Vision](./requirements.md##Vision)
[Scope](./requirements.md##Scope(In/Out))
[MVP](./requirements.md##MinimumViableProduct)
[Functional Requirements](./requirements.md##FunctionalRequirements)
[Non-Functional Requirements](./requirements.md##Non-FunctionalRequirements)
[Data Flow](./requirements.md##DataFlow)

#### Install

```sh
npm install
```

#### Usage

```sh
npm run dev
```

#### Run tests

```sh
npm run test
```

#### Authors

👤 **antoni909**

* Github: [@antoni909](https://github.com/antoni909)
* LinkedIn: [personal profile](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/lorenzo-ortega-antoni\/)

👤 **ag961**

* Github: [ag961](#blank)
* LinkedIn: [personal profile](https://www.linkedin.com/in/ayrat-gimranov/)

👤 **markjackson28**

* Github: [markjackson28]()
* LinkedIn: [personal profile](https://www.linkedin.com/in/markjackson28/)

#### 🤝 Contributing

Contributions, issues and feature requests are welcome!
<br />Feel free to check [issues page](https://github.com/doc-devs/iCare/issues)

#### Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
