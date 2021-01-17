# SocialNetwork ![GitHub last commit](https://img.shields.io/github/last-commit/Mikheull/SocialNetwork)

This is an event API Rest - Facebook like
<br>
*This project was done in school (4th year)*



## Table of Contents
1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
4. [Postman Installation](#postman-installation)
5. [Mongodb Tables](#mongodb-tables)
6. [Status Codes](#status-codes)
7. [Endpoints](#endpoints)
8. [Documentation](https://socialnetwork8.docs.apiary.io/)


## Installation

Use `git clone` to install this app.

```bash
git clone https://github.com/Mikheull/SocialNetwork.git
npm install
```


## Configuration

Create a `.env` file in root directory and write the configuration below.

```bash
NOSQL_HOST=127.0.0.1:27017
NOSQL_TABLE=social_network
ACCESS_TOKEN=xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
```

For all your requests, add an header `x-access-token` with value `your token above`


## Usage

```bash
npm run start
```


## Postman Installation

Download the postman collections file [here](https://raw.githubusercontent.com/Mikheull/SocialNetwork/master/docs/Social_network.postman_collection_3.json) <br>
After that go on Postman :
- Clic on "file" section (on the top of the application)
- Clic on "import" button
- Import the file **Or** paste this link (https://www.getpostman.com/collections/cedb8c25fba8f3b591ee)


## Mongodb Tables

This is all the tables used for this project

| Table |
| :--- |
| `albums` |
| `albums_pictures` |
| `comments` |
| `discussions` |
| `events` |
| `groups` |
| `invitations` |
| `messages` |
| `polls` |
| `polls_answers` |
| `polls_questions_answers` |
| `shoppers` |
| `shopping_items` |
| `tickets_buyed` |
| `tickets_type` |
| `users` |


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

<br>


### Albums :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/albums` | Get all albums | albums |
| GET    | `/albums/{id}` | Get an album | album |
| GET    | `/albums/{id}/pictures` | Get all pictures in album | pictures |
| GET    | `/albums/{id}/pictures/{picture_id}` | Get a picture | picture |
| GET    | `/albums/{id}/pictures/{picture_id}/comments` | Get all comments of a picture in an album | comments |
| POST    | `/albums/create` | Create an album | album |
| POST    | `/albums/{id}/pictures/create` | Create a picture in an album | picture |
| PUT    | `/albums/{id}/update` | Edit an album | album |
| PUT    | `/albums/{id}/pictures/{picture_id}/update` | Edit a picture in an album | picture |
| Delete    | `/albums/{id}/delete` | Delete an album | boolean |
| Delete    | `/albums/{id}/pictures/{picture_id}/delete` | Delete a picture in an album | boolean |


### Comments :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/comments` | Get all comments | comments |
| GET    | `/comments/{id}` | Get one comment | comment |
| POST    | `/comments/create` | Create a comment | comment |
| PUT    | `/comments/{id}/update` | Edit a comment | comment |
| Delete    | `/comments/{id}/delete` | Delete a comment | boolean |


### Discussions :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/discussions` | Get all discussions | discussions |
| GET    | `/discussions/{id}` | Get one discussion | discussion |
| GET    | `/discussions/{id}/messages` | Get all messages from a discussion | messages |
| POST    | `/discussions/create` | Create a discussion | discussion |
| PUT    | `/discussions/{id}/update` | Edit a discussion | discussion |
| Delete    | `/discussions/{id}/delete` | Delete a discussion | boolean |


### Events :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/events` | Get all events | events |
| GET    | `/events/{id}` | Get one event | event |
| POST    | `/events/create` | Create an event | event |
| PUT    | `/events/{id}/update` | Edit an event | event |
| PUT    | `/events/{id}/join` | Join an event | event |
| PUT    | `/events/{id}/leave` | Leave an event | event |
| Delete    | `/events/{id}/delete` | Delete an event | boolean |


### Groups :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/groups` | Get all groups | groups |
| GET    | `/groups/{id}` | Get one group | group |
| POST    | `/groups/create` | Create a group | group |
| PUT    | `/groups/{id}/update` | Edit a group | group |
| PUT    | `/groups/{id}/invite` | Invite in a group | group |
| PUT    | `/groups/{id}/join` | Join a group | group |
| PUT    | `/groups/{id}/leave` | Leave a group | group |
| Delete    | `/groups/{id}/delete` | Delete a group | boolean |


### Invitations :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/invitations` | Get all invitations | invitations |
| GET    | `/invitations/{id}` | Get one invitation | invitation |
| POST    | `/invitations/create` | Create an invitation | invitation |
| PUT    | `/invitations/{id}/update` | Edit an invitation | invitation |
| Delete    | `/invitations/{id}/delete` | Delete an invitation | boolean |


### Messages :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/messages` | Get all messages | messages |
| GET    | `/messages/{id}` | Get one message | message |
| GET    | `/messages/{id}/comments` | Get all comments from a message | comments |
| POST    | `/messages/create` | Create a message | message |
| PUT    | `/messages/{id}/update` | Edit a message | message |
| Delete    | `/messages/{id}/delete` | Delete a message | boolean |


### Polls :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/polls` | Get all polls | polls |
| GET    | `/polls/{id}` | Get one poll | poll |
| GET    | `/polls/{id}/questions` | Get question of a poll | questions |
| GET    | `/polls/{id}/questions/{question_id}/answers` | Get the possible answers of a question | question_answers |
| POST    | `/polls/create` | Create a poll | poll |
| POST    | `/polls/{id}/questions/create` | Create a question in a poll | question |
| POST    | `/polls/{id}/questions/{question_id}/answers/create` | Create a possible answer of a question | answer |
| PUT    | `/polls/{id}/update` | Edit a poll | poll |
| Delete    | `/polls/{id}/delete` | Delete a poll | boolean |




### Shopping :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/shoppings/{id}/items` | Get all items from a shopping list | shopping_list |
| GET    | `/shoppings/{id}/items/shoppers` | Get all reserved items from a shopping list | shopping_list |
| POST    | `/shoppings/enable` | Enable a shopping list in an event | event |
| POST    | `/shoppings/disable` | Disable a shopping list from an event | event |
| POST    | `/shoppings/items/create` | Create an item in a shopping list | item |
| POST    | `/shoppings_item/{id}/shoppers/define/{user_id}` | Define an user on an item | item |
| POST    | `/shoppings_item/{id}/shoppers/undefine/{user_id}` | undefine an user from an item | item |
| PUT    | `/shoppings_item/{id}/update` | Edit an item from a shopping list | item |
| DELETE    | `/shoppings_item/{id}/delete` | Delete an item from a shopping list | item |


### Tickets :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/tickets/types` | Get all tickets type from an event | tickets-type |
| GET    | `/tickets/items/{id}/buyed` | Get all buyed tickets from an event | tickets |
| POST    | `/tickets/enable` | Enable the ticker shop in an event | event |
| POST    | `/tickets/disable` | Disable the ticket shop from an event | event |
| POST    | `/tickets/items/create` | Create a ticket | item |
| POST    | `/tickets/{id}/buy` | Buy a ticket | ticket |
| POST    | `/tickets/{id}/unbuy` | Unbuy a ticket | ticket |


### Users :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/users` | Get all users | users |
| GET    | `/users/{id}` | Get one user | user |
| POST    | `/users/create` | Create an user | user |
| PUT    | `/users/{id}/update` | Edit an user | user |
| Delete    | `/users/{id}/delete` | Delete an user | boolean |
