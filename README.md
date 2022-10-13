# Check-in Questions, the app.

## Introduction 

Our objective was to create a service which would allow our users to log their reading lists as well as recommend the books to others.

The main page would be a collection of all the recommended books - from all users.

Find our page hosted on https://check-in-questions.herokuapp.com/

## Project Scope

Our features were built with a minimal design and objective in mind: meet the acceptance criterias and basic user stories.

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
2. Run `npm install` to install all the dependencies
3. Run `npm run seed` to seed the local database
4. Run `npm run dev` to start the server

*note that Github sign-up won't work on localhost

## User stories

- [x] As a user, I want to: submit information to your site for anyone to see
- [x] As a user, I want to: come back to your site later and see what I posted is still there
- [x] As a user, I want to: be the only person allowed to delete my stuff

### Acceptance criteria
- [x] Express server
- [x] Well-organised modular codebase
- [x] SQLite database
- [x] Hosted on Heroku
- [x] Social login (OAuth)
- [x] Validate user-submitted data on the server
- [x] Handle errors and inform the user
- [x]  Styled appropriately

### Stretch criteria 

## Project Plan / Learnings / Findings

A journey of our project as well the planning process can be found in issue [Update README #18]([https://github.com/fac25/week4-server-side-app-Abby-Patrick-Paz-Yassien/issues/18])


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


![](https://user-images.githubusercontent.com/88027905/194065884-29723bb1-b5be-4ad5-8254-3f407d440d53.png)

## Communication
Throughout our project we used pair-programming method to write the code and rosolve issues. We met in-person, as well as had online meetings to discuss and work together.
We would gather for 5-10 minutes for a quick huddle to discuss the progress so far, and if we faced any issues.

### Tools Used
- Discord
- VS Code Live Share extension
- Github Project Board


### Software Methodologies

During our planning stage, we identified there were functions and components that would be reused in the project. As a result, we decided to include modularization and attempted to follow the DRY principle.


### Website Snapshot 

