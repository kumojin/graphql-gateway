# To recreate the gateway:
```
yarn add express express-graphql graphql
```

# Query the graphql API

```
$ curl -X POST --data '{ "query": "{users {id,username}, messages {id,text,userId,status}}" }' http://localhost:3000/graphql
{
    "data": {
        "users": [
            {
                "id": 1,
                "username": "jmaitrehenry"
            },
            {
                "id": 1,
                "username": "lkokot"
            }
        ],
        "messages": [
            {
                "id": 1,
                "text": "My message",
                "userId": 1,
                "status": "published"
            },
            {
                "id": 2,
                "text": "My second",
                "userId": 1,
                "status": "draft"
            }
        ]
    }
}
```