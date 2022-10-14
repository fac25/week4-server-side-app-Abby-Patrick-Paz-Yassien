

# Check-in Questions, the app.

## Roles

* Paz: Scrum Facilitator
* Abby: User Experience
* Yassien: Dev Ops
* Patick: Quality Assurance

## Introduction 

Find our page hosted here [on heroku](https://check-in-questions.herokuapp.com/)

### What are you building?
Our objective was to create a service which would allow our users to log their check-in questions as well as see the ones posted by others.
The main page would be a collection of all the check-in questions - from the logged-in user.

### Why are you building it?
Our features were built with a minimal design and objective in mind: meet the acceptance criterias and basic user stories.

## Project Scope

### What are you not building?

### How did you decide what features were important?
Our features were built with a minimal design and objective in mind: meet the acceptance criterias and basic user stories.

## Requirement analysis 

### How will you ensure your project is accessible to as many users as possible?

### Are there any legal or regulatory requirements you should consider?

### Security

## Research and findings 

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
2. Run `npm install` to install all the dependencies
3. Run `npm run seed` to seed the local database
4. Run `npm run dev` to start the server
5. Run `npm run test` to carry out the tests

*note that Github sign-up won't work on localhost

## User stories

- [x] As a user, I want to: submit a check-in question to your site for anyone to see
- [x] As a user, I want to: come back to your site later and see what I posted is still there
- [x] As a user, I want to be able to sign-up and login using my Github account

### Acceptance criteria
- [x] Express server
- [x] Well-organised modular codebase
- [x] SQLite database
- [x] Hosted on Heroku
- [x] Social login (OAuth)
- [x] Validate user-submitted data on the server
- [x] Handle errors and inform the user
- [x] Styled appropriately


## Project Plan / Learnings / Findings

A journey of our project as well the planning process can be found in issue [Update README #18](https://github.com/fac25/week4-server-side-app-Abby-Patrick-Paz-Yassien/issues/18)

## Database

This project uses Sqlite3 through the use of the common library `better-sqlite3`.
Our database uses three tables following this schema: 

<details>
<summary><code>users</code></summary>

| column      | type    | constraints               |
| ----------- | ------- | ------------------------- |
| id          | integer | primary key autoincrement |
| username    | text    | unique                    |
| hash        | text    |                           |
| created_at  | datetime| current timestamp         |

</details>

<details>
<summary><code>questions</code></summary>

| column      | type    | constraints                      |
| ----------- | ------- | -------------------------        |
| id          | integer | primary key autoincrement        |
| user_id     | text    | references users(id)             |
| topic       | text    | not null                         |
| question    | text    | not null                         |
| created_at  | datetime| current timestamp                |

</details>

<details>
<summary><code>sessions</code></summary>

| column      | type    | constraints                   |
| ----------- | ------- | -------------------------     |
| id          | text    | primary key                   |
| user_id     | text    | references users(id)          |
| expires_at  | datetime| not null                      |
| created_at  | datetime| default current timestamp     |


</details>

![image](https://user-images.githubusercontent.com/2411572/195643393-391e7794-65c9-4740-9b7a-6c67c2e33dfe.png)

## Communication
Throughout our project we used pair-programming method to write the code and rosolve issues. We met in-person, as well as had online meetings to discuss and work together.
We would gather for 5-10 minutes for a quick huddle to discuss the progress so far, and if we faced any issues.

### Tools Used
- Discord
- VS Code Live Share extension
- Github Project Board


### Software Methodologies

During our planning stage, we identified there were functions and components that would be reused in the project. As a result, we decided to include modularization and attempted to follow the DRY principle.

## A screenshot of the spike

![image](https://user-images.githubusercontent.com/2411572/195643327-1a17d6ef-444e-4db4-950d-ed873567c82f.png)

## Software Planning
We discussed as a group what the main components would be as well as create some user stories.

During this stage, we created a flow chart of the website as well as a wireframe.
Research was done before about the project spike chosen [OAuth apps] so we could a better overview of what would be required.
Multiple issues were created at the beginning to assign them to our collaborators.

It was our belief that by planning the project in such a way, it would provide better workflow, understanding of the project requirements and improve performance.
