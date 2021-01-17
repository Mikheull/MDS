docker-compose up -d
docker exec -it mongosetcont1 mongo

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