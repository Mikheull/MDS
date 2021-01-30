# cybersecuriteapp [GitHub last commit](https://img.shields.io/github/last-commit/Mikheull/cybersecuriteapp)
CyberSecurite &amp; Privileged Access Managment | 🏫 MyDigitalSchool Paris 
This is a project connected to MongoDB Atlas - AutoBuild with docker-compose
<br>
*This project was done in school (5th year)*


## Table of Contents
1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
4. [Architecture](#architectre)
5. [Postman Collection](#postman-collection)
6. [Mongodb Tables](#mongodb-tables)
7. [Endpoints](#endpoints)
8. [Documentation](https://documenter.getpostman.com/view/10971571/T17CEqqV?version=latest)


## Installation

Use `git clone` to install this app.

```bash
git clone https://github.com/Mikheull/cybersecuriteapp.git
```


## Configuration
You must configure a connection url to use MongoDB (Local or Atlas), in the following file, uncomment and modify the needed url.

**./docker-compose.yml**
```
MONGO_URI: mongodb+srv://<user>:<password>@<connection>/<table>?retryWrites=true&w=majority
# MONGO_URI: mongodb://localhost:27017/<table>
```

Create a `.env` file in root directory and write the configuration below.

```bash
NOSQL_HOST=cluster0.p7xv1.mongodb.net
NOSQL_TABLE=cybersecurite
NOSQL_PWD=root
NOSQL_USER=root

ACCESS_TOKEN=d0g5bnNgHpfuRfqp6lm3UDFnqAMqsOcPBGz43nHFlAIFnxYTCB9q7N5QmG3bzwPavxVBR8h9G6HSxAg5-womdQ5Waf7w6oFMcLPZ3yf59wzvWs6
```

For all your requests, add an header `x-access-token` with value `your token above`


## Usage

To start use the following command in a terminal
```bash
cd ./auth_api
npm run start

cd ./api
npm run start

cd ./app
npm run start
```


## Postman Installation

Download the postman collections file [here](https://raw.githubusercontent.com/Mikheull/cybersecuriteapp/master/docs/CyberSecurite.postman_collection.json) <br>
After that go on Postman :
- Clic on "file" section (on the top of the application)
- Clic on "import" button
- Import the file **Or** paste this link (https://www.getpostman.com/collections/41cc66fc077d4095e868)


## Mongodb Tables

This is all the tables used for this project

| Table |
| :--- |
| `users` |
| `products` |


## Status Codes

This API returns the following status codes:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

Base URL: `http://localhost:3030/v1`


## Endpoints

### Albums :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/products` | Get all products | products |
| GET    | `/products/{id}` | Get one product | product |
| POST    | `/products/create` | Create a product | product |
| PUT    | `/products/{id}/update` | Edit a product | product |
| Delete    | `/products/{id}/delete` | Delete a product | product |

### Users :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/users` | Get all users | users |
| GET    | `/users/{id}` | Get one user | user |
| POST    | `/users/create` | Create an user | user |
| POST    | `/auth/login` | Login an account | user |
| PUT    | `/users/{id}/update` | Edit an user | user |
| Delete    | `/users/{id}/delete` | Delete an user | boolean |
