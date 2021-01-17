# MyDigitalSchool - TP Optimisation et performances ![GitHub last commit](https://img.shields.io/github/last-commit/Mikheull/dockeroptimperf)

This is a project connected to MongoDB Atlas - AutoBuild with docker-compose
<br>
*This project was done in school (4th year)*


## Table of Contents
1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
4. [Docker Explanation](#docker-explanation)
5. [Schemas](#schemas)
6. [Postman Collection](#postman-collection)
7. [Mongodb Tables](#mongodb-tables)
8. [Endpoints](#endpoints)
9. [Documentation](https://documenter.getpostman.com/view/10971571/T17CEqqV?version=latest)


## Installation

Use `git clone` to install this app.

```bash
git clone https://github.com/Mikheull/dockeroptimperf.git
```


## Configuration
You must configure a connection url to use MongoDB (Local or Atlas), in the following file, uncomment and modify the needed url.

**./docker-compose.yml**
```
#line 23-24

MONGO_URI: mongodb+srv://<user>:<password>@<connection>/<table>?retryWrites=true&w=majority
# MONGO_URI: mongodb://localhost:27017/<table>

#line 51-52

MONGO_URI: mongodb+srv://<user>:<password>@<connection>/<table>?retryWrites=true&w=majority
# MONGO_URI: mongodb://localhost:27017/<table>

#line 65-66

MONGO_URI: mongodb+srv://<user>:<password>@<connection>/<table>?retryWrites=true&w=majority
# MONGO_URI: mongodb://localhost:27017/<table>

#line 79-80

MONGO_URI: mongodb+srv://<user>:<password>@<connection>/<table>?retryWrites=true&w=majority
# MONGO_URI: mongodb://localhost:27017/<table>
```

When all is done, you can following the next step


## Usage

To start use the following command in a terminal
```bash
bash docker.sh
```


## Docker Explanation

**./docker-compose.yml**
```bash
services:

    frontend:
        # Frontend code will be in the ./frontend folder, and execute the DockerFile File
        build:
            context: ./frontend
            dockerfile: Dockerfile
        # The frontend app will be listening on port 3000
        ports:
            - "3000:3000"


    backend:
        # Backend code will be in the ./backend folder, and execute the DockerFile File
        build:
            context: ./backend
            dockerfile: Dockerfile
        # The backend will be listening on port 8080
        ports:
            - "8080:8080"

        # We set the environment variables here to re-use on the backend code with ENV variable "MONGO_URI"
        environment:
            # Comment the line below if you want to use the local connection
            MONGO_URI: mongodb+srv://root:root@cluster0-p7xv1.mongodb.net/mds?retryWrites=true&w=majority

            # Comment the line below if you want to use the cloud connection
            # MONGO_URI: mongodb://localhost:27017/mds


    # Part of mongo replicasets here
    mongo-setup:
        container_name: mongo-setup
        image: mongo:latest
        restart: on-failure
        networks:
            default:
        # Run the bash script "setup.sh" on start
        entrypoint: "bash setup.sh"
        # Define the 3 replicaset dependencies
        depends_on:
            - mongoset1
            - mongoset2
            - mongoset3

    # First replica is Primary
    mongoset1:
        hostname: mongoset1
        container_name: mongosetcont1
        image: mongo:latest
        expose:
            - 27017
        # Define the port on local 27017
        ports:
            - 27017:27017
        restart: always
        entrypoint: [ "/usr/bin/mongod", "--bind_ip_all", "--replSet", "rs0", "--journal", "--dbpath", "/data/db", "--enableMajorityReadConcern", "false" ]
        environment:
            # Comment the line below if you want to use the local connection
            MONGO_URI: mongodb+srv://root:root@cluster0-p7xv1.mongodb.net/mds?retryWrites=true&w=majority

            # Comment the line below if you want to use the cloud connection
            # MONGO_URI: mongodb://localhost:27017/mds
            
    # Second replica is Secondary      
    mongoset2:
        hostname: mongoset2
        container_name: mongosetcont2
        image: mongo:latest
        expose:
            - 27017
        # Define the port on 27018
        ports:
            - 27018:27017
        restart: always
        entrypoint: [ "/usr/bin/mongod", "--bind_ip_all", "--replSet", "rs0", "--journal", "--dbpath", "/data/db", "--enableMajorityReadConcern", "false" ]
        environment:
            # Comment the line below if you want to use the local connection
            MONGO_URI: mongodb+srv://root:root@cluster0-p7xv1.mongodb.net/mds?retryWrites=true&w=majority

            # Comment the line below if you want to use the cloud connection
            # MONGO_URI: mongodb://localhost:27018/mds

    # Third replica is Secondary
    mongoset3:
        hostname: mongoset3
        container_name: mongosetcont3
        image: mongo:latest
        expose:
            - 27017
        # Define the port on 27019
        ports:
            - 27019:27017
        restart: always
        entrypoint: [ "/usr/bin/mongod", "--bind_ip_all", "--replSet", "rs0", "--journal", "--dbpath", "/data/db", "--enableMajorityReadConcern", "false" ]
        environment:
            # Comment the line below if you want to use the local connection
            MONGO_URI: mongodb+srv://root:root@cluster0-p7xv1.mongodb.net/mds?retryWrites=true&w=majority

            # Comment the line below if you want to use the cloud connection
            # MONGO_URI: mongodb://localhost:27019/mds
```


**./docker.sh**
```bash
#Start the docker
docker-compose up -d

# Open mongo on Primary replica
docker exec -it mongosetcont1 mongo

# Edit the config on Primary replica, and define the last replica on arbitre
rs.initiate(
    {
        _id : 'rs0',
        members: [
            { _id : 0, host : "mongoset1:27017" },
            { _id : 1, host : "mongoset2:27017" },
            { _id : 2, host : "mongoset3:27017", arbiterOnly: true }
        ]
    }
)

exit
```

**./setup.sh**
```bash
# Define the mongosets
MONGODB1=mongoset1
MONGODB2=mongoset2
MONGODB3=mongoset3

echo "**********************************************" ${MONGODB1}
echo "Waiting for startup.."
until curl http://${MONGODB1}:27017/serverStatus\?text\=1 2>&1 | grep uptime | head -1; do
  printf '.'
  sleep 1
done

# Edit the primary configuration
echo SETUP.sh time now: `date +"%T" `
mongo --host ${MONGODB1}:27017 <<EOF
var cfg = {
    "_id": "rs0",
    "protocolVersion": 1,
    "version": 1,
    "members": [
        {
            "_id": 0,
            "host": "${MONGODB1}:27017",
            "priority": 2
        },
        {
            "_id": 1,
            "host": "${MONGODB2}:27017",
            "priority": 0
        },
        {
            "_id": 2,
            "host": "${MONGODB3}:27017",
            "priority": 0
        }
    ],settings: {chainingAllowed: true}
};
rs.initiate(cfg, { force: true });
rs.reconfig(cfg, { force: true });
rs.slaveOk();
db.getMongo().setReadPref('nearest');
db.getMongo().setSlaveOk(); 
EOF
```

## Schemas
<p align="center">
  <img src="https://raw.githubusercontent.com/Mikheull/dockeroptimperf/master/docs/cluster_schema.png?token=AB6REIO7LNUJW4OLMGZE5VS7ASRDS" width="350" title="MongoDB Cluster Schema">

  <img src="https://raw.githubusercontent.com/Mikheull/dockeroptimperf/master/docs/api_schema.png?token=AB6REIKM2MMAWT5LBUIMXXC7ASRJW" width="350" title="API REST Schema">
</p>

The first image is the "MongoDB Cluster Schema" and the second "API REST Schema"

## Postman Collection

Download the postman collections file [here](https://raw.githubusercontent.com/Mikheull/SocialNetwork/master/docs/OptiPerf.postman_collection.json) <br>
After that go on Postman :
- Clic on "file" section (on the top of the application)
- Clic on "import" button
- Import the file **Or** paste this link (https://www.getpostman.com/collections/6ace9e2b9d6e37b1d7c0)


## Mongodb Tables

This is all the tables used for this project

| Table |
| :--- |
| `posts` |
| `users` |


## Endpoints

<br>


### Auth :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/auth/status` | Get a status from an user | status |
| POST    | `/auth/login` | Login an account | user |
| PUT    | `/auth/signup` | Create an account | user |


### Posts :

| Method | Endpoint            | Usage                              | Return        |
|--------|---------------------|------------------------------------|---------------|
| GET    | `/feed/posts` | Get all posts | posts |
| GET    | `/feed/post/{post_id}` | Get a post | post |
| POST    | `/feed/post` | Create a post | post |
| PUT    | `/feed/post/{post_id}` | Edit a post | post |
| Delete    | `/feed/post/{post_id}` | Delete a post | post |

