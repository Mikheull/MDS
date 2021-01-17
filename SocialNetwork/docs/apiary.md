FORMAT: 1A
HOST: http://localhost:3030/v1/

# Social Network Events API | 🏫 MyDigitalSchool Paris

Latius iam disseminata licentia onerosus bonis omnibus **Caesar** nullum post haec adhibens modum 
orientis latera cuncta vexabat nec honoratis parcens nec urbium primatibus nec plebeiis.

## Useful links
+ [Github API](https://github.com/Mikheull/SocialNetwork)
+ [Github Client](https://github.com/Mikheull/SocialNetworkClient/tree/dev)
+ [Postman Documentation](https://documenter.getpostman.com/view/10971571/SzmjyaNt?version=latest)



# Group Albums
Group of all albums-related resources.

## Get all albums [/albums]
### /albums [GET]

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 4,
                    "albums": [
                        {
                            "enable": true,
                            "event_ref": {
                                "description": "Passons la quarantaine ensemble à distance",
                                "date_end": "2020-04-12T16:30:00.000Z",
                                "location": "Chez vous",
                                "cover_image": null,
                                "public": true,
                                "shopping_list": false,
                                "tickets": false,
                                "managers": [
                                    "5e907efcf4e1766b67071ff9"
                                ],
                                "members": [],
                                "enable": true,
                                "name": "Quarantaine",
                                "date_begin": "2020-04-10T18:00:00.000Z",
                                "id": "5e90d0c19a4ec681e260c763"
                            },
                            "title": "Album test2",
                            "date_creation": "2020-05-04T20:58:24.250Z",
                            "id": "5eb081f0d9e87a7d063a47ae"
                        },
                        {
                            "enable": true,
                            "event_ref": {...},
                            "title": "Album test3",
                            "date_creation": "2020-05-14T15:12:02.860Z",
                            "id": "5ebd5fc21f031f8816b7a877"
                        },
                        {
                            "enable": true,
                            "event_ref": {...},
                            "title": "Mon nouveau titre",
                            "date_creation": "2020-05-14T15:21:55.381Z",
                            "id": "5ebd6213970f8f8908c38b04"
                        },
                        {
                            "enable": true,
                            "event_ref": {...},
                            "title": "Mon ablum photo",
                            "date_creation": "2020-05-14T15:56:03.093Z",
                            "id": "5ebd6a136c52ec9214c4d96b"
                        }
                    ]
                }
            }


## Get an unique album [/albums/{id}]
### /albums/{id} [GET]

+ Parameters

    + id: 5eb081f0d9e87a7d063a47ae (identifier) - An unique identifier of an album.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "album": {
                        "enable": true,
                        "event_ref": {
                            "description": "Passons la quarantaine ensemble à distance",
                            "date_end": "2020-04-12T16:30:00.000Z",
                            "location": "Chez vous",
                            "cover_image": null,
                            "public": true,
                            "shopping_list": false,
                            "tickets": false,
                            "managers": [
                                "5e907efcf4e1766b67071ff9"
                            ],
                            "members": [],
                            "enable": true,
                            "name": "Quarantaine",
                            "date_begin": "2020-04-10T18:00:00.000Z",
                            "id": "5e90d0c19a4ec681e260c763"
                        },
                        "title": "Album test2",
                        "date_creation": "2020-05-04T20:58:24.250Z",
                        "id": "5eb081f0d9e87a7d063a47ae"
                    }
                }
            }


## Get all the pictures from an album [/albums/{id}/pictures]
### /albums/{id}/pictures [GET]

+ Parameters

    + id: 5eb081f0d9e87a7d063a47ae (identifier) - An unique identifier of an album.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 1,
                    "pictures": [
                        {
                            "enable": true,
                            "path": "/2020-05-04/test_image2.png",
                            "title": "Ma seconde image",
                            "author_id": {...},
                            "album_ref": "5eb081f0d9e87a7d063a47ae",
                            "date_creation": "2020-05-15T15:10:25.493Z",
                            "id": "5ebeb0e10c54defaf3ebc211"
                        }
                    ]
                }
            }


## Get an unique picture [/albums/{id}/pictures/{picture_id}]
### /albums/{id}/pictures/{picture_id} [GET]

+ Parameters

    + id: 5eb081f0d9e87a7d063a47ae (identifier) - An unique identifier of an album.
    + picture_id: 5ebd6db554749d94e874af04 (identifier) - An unique identifier of a picture.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "picture": {
                        "enable": true,
                        "album_ref": "5ebd6213970f8f8908c38b04",
                        "path": "/2020-05-04/test_image2.png",
                        "title": "Ma première image",
                        "author_id": {...},
                        "date_creation": "2020-05-14T16:11:33.060Z",
                        "id": "5ebd6db554749d94e874af04"
                    }
                }
            }


## Get all comments from a picture [/albums/{id}/pictures/{picture_id}/comments]
### /albums/{id}/pictures/{picture_id}/comments [GET]

+ Parameters

    + id: 5eb081f0d9e87a7d063a47ae (identifier) - An unique identifier of an album.
    + picture_id: 5ebd6db554749d94e874af04 (identifier) - An unique identifier of a picture.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 0,
                    "comments": []
                }
            }


## Create an album [/albums/create]
### /albums/create [POST]

   + Attributes
    + event_ref (object, required) - The ID reference of the event
    + title (string, required) - The title of the album

+ Request (application/json)

        {
            "event_ref": "5e90d0c19a4ec681e260c763",
            "title": "Mon ablum photo"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "album": {
                        "enable": true,
                        "event_ref": "5e90d0c19a4ec681e260c763",
                        "title": "Mon ablum photo",
                        "date_creation": "2020-05-15T15:22:08.775Z",
                        "id": "5ebeb3a00c54defaf3ebc218"
                    }
                }
            }


## Create a picture on an album [/albums/{id}/pictures/create]
### /albums/{id}/pictures/create [POST]

   + Attributes
    + album_ref (object, required) - The ID reference of the album
    + path (string, required) - The path of the image
    + title (string, required) - The title of the image
    + author_id (object, required) - The ID reference of the author
    
    
+ Parameters

    + id: 5eb081f0d9e87a7d063a47ae (identifier) - An unique identifier of an album.

+ Request (application/json)

        {
            "path": "/2020-05-04/test_image2.png",
            "title": "Ma seconde image",
            "author_id": "5e907efcf4e1766b67071ff9"
        }
        
+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "album": {
                        "enable": true,
                        "path": "/2020-05-04/test_image2.png",
                        "title": "Ma seconde image",
                        "author_id": "5e907efcf4e1766b67071ff9",
                        "album_ref": "5ebeb3a00c54defaf3ebc218",
                        "date_creation": "2020-05-15T15:23:15.909Z",
                        "id": "5ebeb3e30c54defaf3ebc219"
                    }
                }
            }


## Edit an album [/albums/{id}/update]
### /albums/{id}/update [PUT]

   + Attributes
    + album_ref (object) - The ID reference of the album
    + path (string) - The path of the image
    + title (string) - The title of the image
    + author_id (object) - The ID reference of the author

+ Parameters

    + id: 5eb081f0d9e87a7d063a47ae (identifier) - An unique identifier of an album.

+ Request (application/json)

        {
            "title": "Mon nouveau titre",
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "album": {
                        "enable": true,
                        "path": "/2020-05-04/test_image2.png",
                        "title": "Mon nouveau titre",
                        "author_id": "5e907efcf4e1766b67071ff9",
                        "album_ref": "5ebeb3a00c54defaf3ebc218",
                        "date_creation": "2020-05-15T15:23:15.909Z",
                        "id": "5ebeb3e30c54defaf3ebc219"
                    }
                }
            }


## Edit a picture on an album [/albums/{id}/pictures/{picture_id}/update]
### /albums/{id}/pictures/{picture_id}/update [PUT]

   + Attributes
    + album_ref (object) - The ID reference of the album
    + path (string) - The path of the image
    + title (string) - The title of the image
    + author_id (object) - The ID reference of the author

+ Parameters

    + id: 5eb081f0d9e87a7d063a47ae (identifier) - An unique identifier of an album.
    + picture_id: 5ebd6db554749d94e874af04 (identifier) - An unique identifier of a picture.

+ Request (application/json)

        {
            "title": "Mon image modifiée",
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "picture": {
                        "enable": true,
                        "album_ref": "5eb081f0d9e87a7d063a47ae",
                        "path": "/2020-05-04/test_image2.png",
                        "title": "Mon image modifiée",
                        "author_id": {...},
                        "date_creation": "2020-05-14T16:11:33.060Z",
                        "id": "5ebd6db554749d94e874af04"
                    }
                }
            }


## Delete an album [/albums/{id}/delete]
### /albums/{id}/delete [DELETE]

+ Parameters

    + id: 5eb081f0d9e87a7d063a47ae (identifier) - An unique identifier of an album.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This album has successfully deleted"
                }
            }


## Delete a picture from an album [/albums/{id}/pictures/{picture_id}/delete]
### /albums/{id}/pictures/{picture_id}/delete [DELETE]
       
+ Parameters

    + id: 5eb081f0d9e87a7d063a47ae (identifier) - An unique identifier of an album.
    + picture_id: 5ebd6db554749d94e874af04 (identifier) - An unique identifier of a picture.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This picture has successfully deleted"
                }
            }



# Group Comments
Group of all comments-related resources.

## Get all comments [/comments]
### /comments [GET]

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 3,
                    "comments": [
                        {
                            "type": "group_message",
                            "author_id": [...],
                            "content": "Commentaire",
                            "content_modified": "comment modified",
                            "date_modified": "2020-05-03T14:57:30.207Z",
                            "enable": true,
                            "ref": "5eaedb4adab36bc314462f1a",
                            "date_creation": "2020-05-03T15:30:33.832Z",
                            "id": "5eaee399a9cdb7c764a42a90"
                        },
                        {
                            "type": "picture",
                            "author_id": [...],
                            "content": "Belle image :D",
                            "content_modified": null,
                            "date_modified": null,
                            "enable": true,
                            "ref": "5ebd6db554749d94e874af04",
                            "date_creation": "2020-05-15T15:17:53.234Z",
                            "id": "5ebeb2a10c54defaf3ebc215"
                        },
                        {
                            "type": "picture",
                            "author_id": [...],
                            "content": "Belle image :D",
                            "content_modified": null,
                            "date_modified": null,
                            "enable": true,
                            "ref": "5eb081f0d9e87a7d063a47ae",
                            "date_creation": "2020-05-15T15:18:14.282Z",
                            "id": "5ebeb2b60c54defaf3ebc216"
                        }
                    ]
                }
            }


## Get an unique comment [/comments/{id}]
### /comments/{id} [GET]

+ Parameters

    + id: 5eaee399a9cdb7c764a42a90 (identifier) - An unique identifier of an comment.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "comment": {
                        "type": "group_message",
                        "author_id": [...],
                        "content": "Commentaire",
                        "content_modified": "comment modified",
                        "date_modified": "2020-05-03T14:57:30.207Z",
                        "enable": true,
                        "ref": "5eaedb4adab36bc314462f1a",
                        "date_creation": "2020-05-03T15:30:33.832Z",
                        "id": "5eaee399a9cdb7c764a42a90"
                    }
                }
            }


## Create a comment [/comments/create]
### /comments/create [POST]

   + Attributes
    + type (string, required) - The type of the comment should be "group_message" or "album"
    + author_id (object, required) - The ID reference of the author
    + ref (object, required) - The ID reference of the group or album
    + content (string) - The content of the comment

+ Request (application/json)

        {
            "type": "picture",
            "author_id": "5ebd6db554749d94e874af04",
            "ref": "5ebd6db554749d94e874af04",
            "content": "Belle image :D"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "comment": {
                        "type": "picture",
                        "author_id": ["5ebd6db554749d94e874af04"],
                        "content": "Belle image :D",
                        "content_modified": null,
                        "date_modified": null,
                        "enable": true,
                        "ref": "5ebd6db554749d94e874af04",
                        "date_creation": "2020-05-15T15:38:42.682Z",
                        "id": "5ebeb7820c54defaf3ebc21a"
                    }
                }
            }


## Edit a comment [/comments/{id}/update]
### /comments/{id}/update [PUT]

   + Attributes
    + type (string) - The type of the comment should be "group_message" or "album"
    + author_id (object) - The ID reference of the author
    + ref (object) - The ID reference of the group or album
    + content (string) - The content of the comment

+ Parameters

    + id: 5ebeb7820c54defaf3ebc21a (identifier) - An unique identifier of a comment.

+ Request (application/json)

        {
            "title": "Mon nouveau titre :)",
        }
        
+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "comment": {
                        "type": "picture",
                        "author_id": ["5ebd6db554749d94e874af04"],
                        "content": "Belle image :D",
                        "content_modified": "Mon nouveau titre :)",
                        "date_modified": "2020-05-15T15:40:10.320Z",
                        "enable": true,
                        "ref": "5ebd6db554749d94e874af04",
                        "date_creation": "2020-05-15T15:38:42.682Z",
                        "id": "5ebeb7820c54defaf3ebc21a"
                    }
                }
            }


## Delete a comment [/comments/{id}/delete]
### /comments/{id}/delete [DELETE]

+ Parameters

    + id: 5ebeb7820c54defaf3ebc21a (identifier) - An unique identifier of a comment.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This comment has successfully deleted"
                }
            }



# Group Discussions
Group of all discussions-related resources.

## Get all discussions [/discussions]
### /discussions [GET]

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 1,
                    "discussions": [
                        {
                            "enable": true,
                            "type": "event",
                            "date_creation": "2020-05-03T14:31:54.696Z",
                            "id": "5eaed5dac689cfbc9cd481fc"
                        }
                    ]
                }
            }


## Get an unique discussion [/discussions/{id}]
### /discussions/{id} [GET]

+ Parameters

    + id: 5eaed5dac689cfbc9cd481fc (identifier) - An unique identifier of a discussion.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "discussion": {
                        "enable": true,
                        "type": "event",
                        "date_creation": "2020-05-03T14:31:54.696Z",
                        "id": "5eaed5dac689cfbc9cd481fc"
                    }
                }
            }


## Get all messages in discussion [/discussions/{id}/messages]
### /discussions/{id} [GET]

+ Parameters

    + id: 5eaed5dac689cfbc9cd481fc (identifier) - An unique identifier of a discussion.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 2,
                    "messages": [
                        {
                            "content_modified": null,
                            "date_modified": null,
                            "enable": true,
                            "author_id": "5e907efcf4e1766b67071ff9",
                            "discussion_ref": {
                                "enable": true,
                                "type": "event",
                                "date_creation": "2020-05-03T14:31:54.696Z",
                                "id": "5eaed5dac689cfbc9cd481fc"
                            },
                            "content": "hello world",
                            "date_creation": "2020-05-14T16:37:17.831Z",
                            "id": "5ebd73bd08404d99ad3221ce"
                        },
                        {
                            "content_modified": null,
                            "date_modified": null,
                            "enable": true,
                            "author_id": "5e907efcf4e1766b67071ff9",
                            "discussion_ref": {...},
                            "content": "hello world",
                            "date_creation": "2020-05-14T17:32:00.646Z",
                            "id": "5ebd8090f480b4a633b357c6"
                        }
                    ]
                }
            }


## Create a discussion [/discussions/create]
### /discussions/create [POST]

   + Attributes
    + type (string, required) - The type of the discussion should be "group" or "event"
    + ref (object, required) - The ID reference of the group or event

+ Request (application/json)

        {
            "type": "group",
            "ref": "5e90d0c19a4ec681e260c763"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "discussion": {
                        "enable": true,
                        "type": "group",
                        "ref": "5e90d0c19a4ec681e260c763",
                        "date_creation": "2020-05-15T15:45:32.094Z",
                        "id": "5ebeb91c0c54defaf3ebc21b"
                    }
                }
            }


## Edit a discussion [/discussions/{id}/update]
### /discussions/{id}/update [PUT]

   + Attributes
    + type (string) - The type of the discussion should be "group" or "event"
    + ref (object) - The ID reference of the group or event

+ Parameters

    + id: 5ebeb91c0c54defaf3ebc21b (identifier) - An unique identifier of a discussion.

+ Request (application/json)

        {
            "type": "event",
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "discussion": {
                        "enable": true,
                        "type": "event",
                        "ref": "5e90d0c19a4ec681e260c763",
                        "date_creation": "2020-05-15T15:45:32.094Z",
                        "id": "5ebeb91c0c54defaf3ebc21b"
                    }
                }
            }


## Delete a discussion [/discussions/{id}/delete]
### /discussions/{id}/delete [DELETE]

+ Parameters

    + id: 5ebeb91c0c54defaf3ebc21b (identifier) - An unique identifier of a discussion.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This discussion has successfully deleted"
                }
            }



# Group Events
Group of all events-related resources.

## Get all events [/events]
### /events [GET]

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 2,
                    "events": [
                        {
                            "description": "Passons la quarantaine ensemble à distance",
                            "date_end": "2020-04-12T16:30:00.000Z",
                            "location": "Chez vous",
                            "cover_image": null,
                            "public": true,
                            "shopping_list": false,
                            "tickets": false,
                            "managers": [
                                "5e907efcf4e1766b67071ff9"
                            ],
                            "members": [],
                            "enable": true,
                            "name": "Quarantaine",
                            "date_begin": "2020-04-10T18:00:00.000Z",
                            "id": "5e90d0c19a4ec681e260c763"
                        },
                        {
                            "description": "Description courte",
                            "date_end": "2020-05-14T16:30:00.000Z",
                            "location": "Ici",
                            "cover_image": null,
                            "public": true,
                            "shopping_list": false,
                            "tickets": false,
                            "managers": [
                                "5e907efcf4e1766b67071ff9"
                            ],
                            "members": [],
                            "enable": true,
                            "name": "Mon evenement",
                            "date_begin": "2020-05-14T18:00:00.000Z",
                            "id": "5ebeba320c54defaf3ebc21c"
                        }
                    ]
                }
            }


## Get an unique event [/events/{id}]
### /events/{id} [GET]

+ Parameters

    + id: 5ebeba320c54defaf3ebc21c (identifier) - An unique identifier of an event.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "event": {
                        "description": "Description courte",
                        "date_end": "2020-05-14T16:30:00.000Z",
                        "location": "Ici",
                        "cover_image": null,
                        "public": true,
                        "shopping_list": false,
                        "tickets": false,
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Mon evenement",
                        "date_begin": "2020-05-14T18:00:00.000Z",
                        "id": "5ebeba320c54defaf3ebc21c"
                    }
                }
            }


## Create an event [/events/create]
### /events/create [POST]

   + Attributes
    + name (string, required) - Name of the event
    + description (string) - Description of the event
    + date_begin (string, required) - Date of the start of the event
    + date_end (string) - Date of the planned end of the event
    + location (string) - Location of the event
    + cover_image (string) - Link of the online cover picture of the event
    + public (boolean) - If the event is public
    + shopping_list (boolean) - If the shop is enable
    + tickets (boolean) - If the tickets shop is enable
    + managers (object, required) - The ID references of the managers of the event
    + members (object, required) - The ID references of the members of the event

+ Request (application/json)

        {
            "name": "Mon evenement",
            "description": "Description courte",
            "date_begin": "2020-05-14T20:00:00",
            "date_end": "2020-05-14T18:30:00",
            "location": "Ici",
            "public": true,
            "managers": ["5e907efcf4e1766b67071ff9"]
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "event": {
                        "description": "Description courte",
                        "date_end": "2020-05-14T16:30:00.000Z",
                        "location": "Ici",
                        "cover_image": null,
                        "public": true,
                        "shopping_list": false,
                        "tickets": false,
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Mon evenement",
                        "date_begin": "2020-05-14T18:00:00.000Z",
                        "id": "5ebeba320c54defaf3ebc21c"
                    }
                }
            }


## Join an event [/events/{id}/join]
### /events/{id}/join [PUT]

   + Attributes
    + user_id (object, required) - The ID references of the user
    + manager (boolean, required) - If the user should be a manager

+ Parameters

    + id: 5ebeba320c54defaf3ebc21c (identifier) - An unique identifier of an event.

+ Request (application/json)

        {
            "user_id": "5e907efcf4e1766b67071ff9",
            "manager": false
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "error": {
                    "code": 400,
                    "message": "User already in this event"
                }
            }  


## Leave an event [/events/{id}/leave]
### /events/{id}/leave [PUT]

   + Attributes
    + user_id (object, required) - The ID references of the user
    + manager (boolean, required) - If the user is a manager

+ Parameters

    + id: 5ebeba320c54defaf3ebc21c (identifier) - An unique identifier of an event.

+ Request (application/json)

        {
            "user_id": "5e907efcf4e1766b67071ff9",
            "manager": false
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "error": {
                    "code": 400,
                    "message": "User not in this event"
                }
            }


## Edit an event [/events/{id}/update]
### /events/{id}/update [PUT]

   + Attributes
    + name (string) - Name of the event
    + description (string) - Description of the event
    + date_begin (string) - Date of the start of the event
    + date_end (string) - Date of the planned end of the event
    + location (string) - Location of the event
    + cover_image (string) - Link of the online cover picture of the event
    + public (boolean) - If the event is public
    + shopping_list (boolean) - If the shop is enable
    + tickets (boolean) - If the tickets shop is enable
    + managers (object) - The ID references of the managers of the event
    + members (object) - The ID references of the members of the event

+ Parameters

    + id: 5ebeba320c54defaf3ebc21c (identifier) - An unique identifier of an event.

+ Request (application/json)

        {
            "name": "Mon evenement renommé",
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "event": {
                        "description": "Description courte",
                        "date_end": "2020-05-14T16:30:00.000Z",
                        "location": "Ici",
                        "cover_image": null,
                        "public": true,
                        "shopping_list": false,
                        "tickets": false,
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Mon evenement renommé",
                        "date_begin": "2020-05-14T18:00:00.000Z",
                        "id": "5ebeba320c54defaf3ebc21c"
                    }
                }
            }


## Delete an event [/events/{id}/delete]
### /events/{id}/delete [DELETE]

+ Parameters

    + id: 5ebeba320c54defaf3ebc21c (identifier) - An unique identifier of an event.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This event has successfully deleted"
                }
            }



# Group Groups
Group of all groups-related resources.

## Get all groups [/groups]
### /groups [GET]

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 1,
                    "groups": [
                        {
                            "permissions": {
                                "member_publish": true,
                                "member_create_event": false
                            },
                            "description": "Petite description du groupe",
                            "icon": null,
                            "cover_image": null,
                            "group_type": "private",
                            "managers": [
                                "5e907efcf4e1766b67071ff9"
                            ],
                            "members": [],
                            "enable": true,
                            "name": "Groupe #1",
                            "date_begin": "2020-04-15T14:03:00.000Z",
                            "id": "5e971452559f045d7439b9f2"
                        }
                    ]
                }
            }


## Get an unique group [/groups/{id}]
### /groups/{id} [GET]

+ Parameters

    + id: 5e971452559f045d7439b9f2 (identifier) - An unique identifier of a group.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "group": {
                        "permissions": {
                            "member_publish": true,
                            "member_create_event": false
                        },
                        "description": "Petite description du groupe",
                        "icon": null,
                        "cover_image": null,
                        "group_type": "private",
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Groupe #1",
                        "date_begin": "2020-04-15T14:03:00.000Z",
                        "id": "5e971452559f045d7439b9f2"
                    }
                }
            }


## Create a group [/groups/create]
### /groups/create [POST]

   + Attributes
    + name (string, required) - Name of the group
    + description (string, required) - Description of the group
    + date_begin (string, required) - Date of the start of the group
    + icon (string) - Icon of the group
    + cover_image (string, required) - Link of the online cover picture of the group
    + group_type (string, required) - The type of the group should be "secret", "public" or "private"
    + managers (object, required) - The ID references of the managers of the group
    + members (object, required) - The ID references of the members of the group
    + permission (object) - The members permissions for the group
        + member_publish (boolean, required) - If members can public on the group
        + member_create_event (boolean, required) - if members can create evenement on the group

+ Request (application/json)

        {
            "name": "Mon groupe",
            "description": "Petite description du groupe",
            "date_begin": "2020-04-15T16:03:00",
            "group_type": "private",
            "managers": ["5e907efcf4e1766b67071ff9"],
            "permissions": {
                "member_publish": true,
                "member_create_event": false
            }
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "group": {
                        "permissions": {
                            "member_publish": true,
                            "member_create_event": false
                        },
                        "description": "Petite description du groupe",
                        "icon": null,
                        "cover_image": null,
                        "group_type": "private",
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Mon groupe",
                        "date_begin": "2020-04-15T14:03:00.000Z",
                        "id": "5ebebeac0c54defaf3ebc21d"
                    }
                }
            }


## Invite in a group [/groups/{id}/invite]
### /groups/{id}/invite [POST]

   + Attributes
    + type (string, required) - The type of the invitation should be "group" or "event"
    + role (string, required) - The role of the user should be "member" or "manager"
    + id_receiver (object, required) - The ID reference of the receiver
    + id_sender (object, required) - The ID reference of the sender

+ Parameters

    + id: 5ebebeac0c54defaf3ebc21d (identifier) - An unique identifier of a group.

+ Request (application/json)

        {
            "type": "group",
            "role": "member",
            "id_receiver": "5e90dbffb91b1613ba47c5101",
            "id_sender": "5e907efcf4e1766b67071ff9"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "error": {
                    "code": 400,
                    "message": "An error has occurred"
                }
            }


## Join a group [/groups/{id}/join]
### /groups/{id}/join [PUT]

   + Attributes
    + user_id (object, required) - The ID references of the user
    + manager (boolean, required) - If the user should be a manager

+ Parameters

    + id: 5ebebeac0c54defaf3ebc21d (identifier) - An unique identifier of an event.

+ Request (application/json)

        {
            "user_id": "5e907efcf4e1766b67071ff9",
            "manager": false
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "error": {
                    "code": 400,
                    "message": "User already in this group"
                }
            }  


## Leave a group [/groups/{id}/leave]
### /groups/{id}/leave [PUT]

   + Attributes
    + user_id (object, required) - The ID references of the user
    + manager (boolean, required) - If the user is a manager

+ Parameters

    + id: 5ebebeac0c54defaf3ebc21d (identifier) - An unique identifier of a group.

+ Request (application/json)

        {
            "user_id": "5e907efcf4e1766b67071ff9",
            "manager": false
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "error": {
                    "code": 400,
                    "message": "User not in this group"
                }
            }


## Edit a group [/groups/{id}/update]
### /groups/{id}/update [PUT]

   + Attributes
    + name (string) - Name of the group
    + description (string) - Description of the group
    + date_begin (string) - Date of the start of the group
    + icon (string) - Icon of the group
    + cover_image (string) - Link of the online cover picture of the group
    + group_type (string) - The type of the group should be "secret", "public" or "private"
    + managers (object) - The ID references of the managers of the group
    + members (object) - The ID references of the members of the group
    + permission (object) - The members permissions for the group
        + member_publish (boolean) - If members can public on the group
        + member_create_event (boolean) - if members can create evenement on the group

+ Parameters

    + id: 5ebebeac0c54defaf3ebc21d (identifier) - An unique identifier of a group.

+ Request (application/json)

        {
            "name": "Mon groupe renommé",
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "group": {
                        "permissions": {
                            "member_publish": true,
                            "member_create_event": false
                        },
                        "description": "Petite description du groupe",
                        "icon": null,
                        "cover_image": null,
                        "group_type": "private",
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Mon groupe renommé",
                        "date_begin": "2020-04-15T14:03:00.000Z",
                        "id": "5ebebeac0c54defaf3ebc21d"
                    }
                }
            }


## Delete a group [/groups/{id}/delete]
### /groups/{id}/delete [DELETE]

+ Parameters

    + id: 5ebebeac0c54defaf3ebc21d (identifier) - An unique identifier of a group.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This group has successfully deleted"
                }
            }



# Group Invitations
Group of all invitations-related resources.

## Get all invitations [/invitations]
### /invitations [GET]

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 1,
                    "invitations": [
                        "role": "member",
                        "id_sender": "5e907efcf4e1766b67071ff9",
                        "date_end": null,
                        "enable": true,
                        "type": "group",
                        "id_destination": "5e971452559f045d7439b9f2",
                        "id_receiver": "5e907efcf4e1766b67071ff9",
                        "date_begin": "2020-05-15T16:20:30.180Z",
                        "id": "5ebec14e0c54defaf3ebc21f"
                    ]
                }
            }


## Get an unique invitation [/invitations/{id}]
### /invitations/{id} [GET]

+ Parameters

    + id: 5ebec14e0c54defaf3ebc21f (identifier) - An unique identifier of an invitation.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "invitations": [
                        "role": "member",
                        "id_sender": "5e907efcf4e1766b67071ff9",
                        "date_end": null,
                        "enable": true,
                        "type": "group",
                        "id_destination": "5e971452559f045d7439b9f2",
                        "id_receiver": "5e907efcf4e1766b67071ff9",
                        "date_begin": "2020-05-15T16:20:30.180Z",
                        "id": "5ebec14e0c54defaf3ebc21f"
                    ]
                }
            }


## Create an invitation [/invitations/create]
### /invitations/create [POST]

   + Attributes
    + type (string, required) - The type of the invitation should be "group" or "event"
    + id_destination (object, required) - The ID reference of the group or event
    + role (string, required) - The role of the user should be "member" or "manager"
    + id_receiver (object, required) - The ID reference of the receiver
    + id_sender (object, required) - The ID reference of the sender

+ Request (application/json)

        {
            "type": "group",
            "id_destination": "5e971452559f045d7439b9f2",
            "role": "member",
            "id_receiver": "5e907efcf4e1766b67071ff9",
            "id_sender": "5e907efcf4e1766b67071ff9"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "invitation": {
                        "role": "member",
                        "id_sender": "5e907efcf4e1766b67071ff9",
                        "date_end": null,
                        "enable": true,
                        "type": "group",
                        "id_destination": "5e971452559f045d7439b9f2",
                        "id_receiver": "5e907efcf4e1766b67071ff9",
                        "date_begin": "2020-05-15T16:20:30.180Z",
                        "id": "5ebec14e0c54defaf3ebc21f"
                    }
                }
            }


## Edit an invitation [/invitations/{id}/update]
### /invitations/{id}/update [PUT]

   + Attributes
    + type (string) - The type of the invitation should be "group" or "event"
    + id_destination (object) - The ID reference of the group or event
    + role (string) - The role of the user should be "member" or "manager"
    + id_receiver (object) - The ID reference of the receiver
    + id_sender (object) - The ID reference of the sender

+ Parameters

    + id: 5ebec14e0c54defaf3ebc21f (identifier) - An unique identifier of an invitation.

+ Request (application/json)

        {
            "type": "event",
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "invitation": {
                        "role": "member",
                        "id_sender": "5e907efcf4e1766b67071ff9",
                        "date_end": null,
                        "enable": true,
                        "type": "event",
                        "id_destination": "5e971452559f045d7439b9f2",
                        "id_receiver": "5e907efcf4e1766b67071ff9",
                        "date_begin": "2020-05-15T16:20:30.180Z",
                        "id": "5ebec14e0c54defaf3ebc21f"
                    }
                }
            }


## Delete an invitation [/invitations/{id}/delete]
### /invitations/{id}/delete [DELETE]

+ Parameters

    + id: 5ebec14e0c54defaf3ebc21f (identifier) - An unique identifier of an invitation.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This invitation has successfully deleted"
                }
            }



# Group Messages
Group of all messages-related resources.

## Get all messages [/messages]
### /messages [GET]

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 3,
                    "messages": [
                        {
                            "content_modified": "Hello world modified",
                            "date_modified": "2020-05-03T14:57:30.207Z",
                            "enable": true,
                            "author_id": "5e907efcf4e1766b67071ff9",
                            "discussion_ref": {
                                "enable": true,
                                "type": "event",
                                "date_creation": "2020-05-03T14:31:54.696Z",
                                "id": "5eaed5dac689cfbc9cd481fc"
                            },
                            "content": "hello world",
                            "date_creation": "2020-05-03T14:55:06.207Z",
                            "id": "5eaedb4adab36bc314462f1a"
                        },
                        {
                            "content_modified": null,
                            "date_modified": null,
                            "enable": true,
                            "author_id": "5e907efcf4e1766b67071ff9",
                            "discussion_ref": {...},
                            "content": "hello world",
                            "date_creation": "2020-05-14T16:37:17.831Z",
                            "id": "5ebd73bd08404d99ad3221ce"
                        },
                        {
                            "content_modified": null,
                            "date_modified": null,
                            "enable": true,
                            "author_id": "5e907efcf4e1766b67071ff9",
                            "discussion_ref": {...},
                            "content": "hello world",
                            "date_creation": "2020-05-14T17:32:00.646Z",
                            "id": "5ebd8090f480b4a633b357c6"
                        }
                    ]
                }
            }


## Get an unique message [/messages/{id}]
### /messages/{id} [GET]

+ Parameters

    + id: 5ebd8090f480b4a633b357c6 (identifier) - An unique identifier of a message.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "message": {
                        "content_modified": null,
                        "date_modified": null,
                        "enable": true,
                        "author_id": {...},
                        "discussion_ref": {
                            "enable": true,
                            "type": "event",
                            "date_creation": "2020-05-03T14:31:54.696Z",
                            "id": "5eaed5dac689cfbc9cd481fc"
                        },
                        "content": "hello world",
                        "date_creation": "2020-05-14T17:32:00.646Z",
                        "id": "5ebd8090f480b4a633b357c6"
                    }
                }
            }


## Get all comments of a message [/messages/{id}/comments]
### /messages/{id}/comments [GET]

+ Parameters

    + id: 5ebd8090f480b4a633b357c6 (identifier) - An unique identifier of a message.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 0,
                    "comments": []
                }
            }


## Create a message [/messages/create]
### /messages/create [POST]

   + Attributes
    + author_id (object, required) - The ID reference of the author
    + discussion_ref (object, required) - The ID reference of the discussion
    + content (string, required) - The content of the message

+ Request (application/json)

        {
            "author_id": "5e907efcf4e1766b67071ff9",
            "discussion_ref": "5eaed5dac689cfbc9cd481fc",
            "content": "hello world"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "message": {
                        "content_modified": null,
                        "date_modified": null,
                        "enable": true,
                        "author_id": "5e907efcf4e1766b67071ff9",
                        "discussion_ref": "5eaed5dac689cfbc9cd481fc",
                        "content": "hello world",
                        "date_creation": "2020-05-15T16:27:32.406Z",
                        "id": "5ebec2f40c54defaf3ebc220"
                    }
                }
            }


## Edit a message [/messages/{id}/update]
### /messages/{id}/update [PUT]

   + Attributes
    + type (string) - The type of the invitation should be "group" or "event"
    + id_destination (object) - The ID reference of the group or event
    + role (string) - The role of the user should be "member" or "manager"
    + id_receiver (object) - The ID reference of the receiver
    + id_sender (object) - The ID reference of the sender

+ Parameters

    + id: 5ebec14e0c54defaf3ebc21f (identifier) - An unique identifier of an invitation.

+ Request (application/json)

        {
            "type": "event",
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "invitation": {
                        "role": "member",
                        "id_sender": "5e907efcf4e1766b67071ff9",
                        "date_end": null,
                        "enable": true,
                        "type": "event",
                        "id_destination": "5e971452559f045d7439b9f2",
                        "id_receiver": "5e907efcf4e1766b67071ff9",
                        "date_begin": "2020-05-15T16:20:30.180Z",
                        "id": "5ebec14e0c54defaf3ebc21f"
                    }
                }
            }


## Delete a message [/messages/{id}/delete]
### /messages/{id}/delete [DELETE]

+ Parameters

    + id: 5ebec14e0c54defaf3ebc21f (identifier) - An unique identifier of an message.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This message has successfully deleted"
                }
            }



# Group Polls
Group of all polls-related resources.

## Get all polls [/polls]
### /polls [GET]

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 2,
                    "polls": [
                        {
                            "date_end": null,
                            "enable": true,
                            "author_id": {...},
                            "title": "Sondage modifié",
                            "date_creation": "2020-05-05T13:19:56.860Z",
                            "id": "5eb167fcc0584a30ba3ebec9"
                        },
                        {
                            "date_end": null,
                            "enable": true,
                            "author_id": {...},
                            "title": "Mon sondage",
                            "date_creation": "2020-05-05T13:35:57.428Z",
                            "id": "5eb16bbd234475336e0112dc"
                        }
                    ]
                }
            }


## Get an unique poll [/polls/{id}]
### /polls/{id} [GET]

+ Parameters

    + id: 5eb167fcc0584a30ba3ebec9 (identifier) - An unique identifier of a poll.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "poll": {
                    "date_end": null,
                    "enable": true,
                    "author_id": {
                        "status": true,
                        "image_profile": "https://www.breizh-info.com/wp-content/uploads/2019/12/chewbacca.jpg",
                        "first_name": "Mikhael",
                        "last_name": "Bailly",
                        "username": "Mikheull",
                        "email": "mikhae.bailly@gmail.com",
                        "password": "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2",
                        "date_creation": "2020-04-10T14:13:16.570Z",
                        "date_modified": "2020-04-10T14:13:16.570Z",
                        "id": "5e907efcf4e1766b67071ff9"
                    },
                    "title": "Sondage modifié",
                    "date_creation": "2020-05-05T13:19:56.860Z",
                    "id": "5eb167fcc0584a30ba3ebec9"
                }
            }


## Get all questions in a poll [/polls/{id}/questions]
### /polls/{id}/questions [GET]

+ Parameters

    + id: 5ebedebf0c54defaf3ebc22c (identifier) - An unique identifier of a poll.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 0,
                    "pollQuesions": []
                }
            }


## Get all answers of a question in a poll [/polls/{id}/questions/{question_id}/answers]
### /polls/{id}/questions/{question_id}/answers [GET]

+ Parameters

    + id: 5eb167fcc0584a30ba3ebec9 (identifier) - An unique identifier of a poll.
    + question_id: 5ebedebf0c54defaf3ebc22c (identifier) - An unique identifier of a question.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 0,
                    "answers": []
                }
            }


## Create a poll [/polls/create]
### /polls/create [POST]

   + Attributes
    + author_id (object, required) - The ID reference of the author
    + title (string, required) - The title of the poll

+ Request (application/json)

        {
            "author_id": "5e907efcf4e1766b67071ff9",
            "title": "Mon sondage"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "poll": {
                        "date_end": null,
                        "enable": true,
                        "author_id": "5e907efcf4e1766b67071ff9",
                        "title": "Mon sondage",
                        "date_creation": "2020-05-15T18:26:07.934Z",
                        "id": "5ebedebf0c54defaf3ebc22c"
                    }
                }
            }


## Create a question in a poll [/polls/{id}/questions/create]
### /polls/{id}/questions/create [POST]

   + Attributes
    + content (string, required) - The content of the question
    + poll_ref (object, required) - The ID reference of the poll

+ Parameters

    + id: 5eb16bbd234475336e0112dc (identifier) - An unique identifier of a poll.

+ Request (application/json)

        {
            "content": "Ma seconde question",
            "poll_ref": "5ebedebf0c54defaf3ebc22c"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "question": {
                        "enable": true,
                        "content": "Ma seconde question",
                        "poll_ref": "5eb16bbd234475336e0112dc",
                        "id": "5ebee0850c54defaf3ebc22e"
                    }
                }
            }


## Create an answer for a question in a poll [/polls/{id}/questions/{id_question}/answer/create]
### /polls/{id}/questions/{id_question}/answer/create [POST]

   + Attributes
    + content (string, required) - The content of the answer
    + poll_ref (object, required) - The ID reference of the poll
    + question_ref (object, required) - The ID reference of the question

+ Parameters

    + id: 5eb16bbd234475336e0112dc (identifier) - An unique identifier of a poll.
    + id_question: 5ebee0850c54defaf3ebc22e (identifier) - An unique identifier of a question.

+ Request (application/json)

        {
            "content": "Réponse #3",
            "poll_ref": "5eb16bbd234475336e0112dc",
            "question_ref": "5ebee0850c54defaf3ebc22e"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "error": {
                    "status": 400,
                    "message": "question does not exist"
                }
            }


## Edit a poll [/polls/{id}/update]
### /polls/{id}/update [PUT]

   + Attributes
    + author_id (object, required) - The ID reference of the author
    + title (string, required) - The title of the poll

+ Parameters

    + id: 5ebec14e0c54defaf3ebc21f (identifier) - An unique identifier of an invitation.

+ Request (application/json)

        {
            "title": "Sondage modifié"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "poll": {
                        "date_end": null,
                        "enable": true,
                        "author_id": {...},
                        "title": "Sondage modifié",
                        "date_creation": "2020-05-05T13:19:56.860Z",
                        "id": "5eb167fcc0584a30ba3ebec9"
                    }
                }
            }


## Delete a poll [/polls/{id}/delete]
### /polls/{id}/delete [DELETE]

+ Parameters

    + id: 5eb167fcc0584a30ba3ebec9 (identifier) - An unique identifier of an message.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This poll has successfully deleted"
                }
            }


# Group Shoppings
Group of all shoppings-related resources.

## Get all items in a shopping list [/shoppings/{id}/items]
### /shoppings/{id}/items [GET]

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 3,
                    "items": [
                        {
                            "enable": true,
                            "event_id": {...},
                            "name": "Bierres",
                            "date_creation": "2020-05-13T13:08:52.643Z",
                            "id": "5ebbf164638f0712b7373cfa"
                        },
                        {
                            "enable": true,
                            "event_id": {... },
                            "name": "Soda",
                            "date_creation": "2020-05-14T17:40:38.180Z",
                            "id": "5ebd829676c37da9a28588fd"
                        },
                        {
                            "enable": true,
                            "event_id": {...},
                            "name": "Soda",
                            "date_creation": "2020-05-14T17:41:49.920Z",
                            "id": "5ebd82dd76c37da9a28588fe"
                        }
                    ]
                }
            }


## Get all reserved items in a shopping list [/shoppings/{id}/items/shoppers]
### /shoppings/{id}/items/shoppers [GET]

+ Parameters

    + id: 5ebbe780e02fc606c9eff903 (identifier) - An unique identifier of an event.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 1,
                    "items": [
                        {
                            "enable": true,
                            "event_id": {...},
                            "item_id": "5ebbf164638f0712b7373cfa",
                            "quantity": 1,
                            "hour": "2020-05-13T13:19:59.417Z",
                            "date_creation": "2020-05-14T17:42:01.978Z",
                            "id": "5ebd82e976c37da9a2858901"
                        }
                    ]
                }
            }


## Enable a shopping list [/shoppings/enable]
### /shoppings/enable [POST]

   + Attributes
    + event_id (object, required) - The ID reference of the event

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "event": {
                        "description": "Passons la quarantaine ensemble à distance",
                        "date_end": "2020-04-12T16:30:00.000Z",
                        "location": "Chez vous",
                        "cover_image": null,
                        "public": true,
                        "shopping_list": true,
                        "tickets": false,
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Quarantaine",
                        "date_begin": "2020-04-10T18:00:00.000Z",
                        "id": "5ebbe780e02fc606c9eff903"
                    }
                }
            }


## Disable a shopping list [/shoppings/disable]
### /shoppings/disable [POST]

   + Attributes
    + event_id (object, required) - The ID reference of the event

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "event": {
                        "description": "Passons la quarantaine ensemble à distance",
                        "date_end": "2020-04-12T16:30:00.000Z",
                        "location": "Chez vous",
                        "cover_image": null,
                        "public": false,
                        "shopping_list": true,
                        "tickets": false,
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Quarantaine",
                        "date_begin": "2020-04-10T18:00:00.000Z",
                        "id": "5ebbe780e02fc606c9eff903"
                    }
                }
            }


## Create an item in a shopping list [/shoppings/items/create]
### /shoppings/items/create [POST]

   + Attributes
    + event_id (object, required) - The ID reference of the event
    + name (string, required) - The name of the item

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903",
            "name": "Saucisses"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "item": {
                        "enable": true,
                        "event_id": "5ebbe780e02fc606c9eff903",
                        "name": "Saucisses",
                        "date_creation": "2020-05-15T16:47:36.801Z",
                        "id": "5ebec7a80c54defaf3ebc221"
                    }
                }
            }     


## Define an item on an user [/shoppings_item/{id}/shoppers/define/{user_id}]
### /shoppings_item/{id}/shoppers/define/{user_id} [POST]

   + Attributes
    + event_id (object, required) - The ID reference of the event
    + item_id (object, required) - The ID reference of the item
    + quantity (string, required) - The quantity of the item
    + hour (string, required) - The hour for the item

+ Parameters

    + id: 5ebbf164638f0712b7373cfa (identifier) - An unique identifier of an item.
    + user_id: 5e907efcf4e1766b67071ff9 (identifier) - An unique identifier of an user.

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903",
            "item_id": "5ebbf164638f0712b7373cfa",
            "quantity": "1",
            "hour": "2020-05-13T13:19:59.417Z"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "item": {
                        "enable": true,
                        "event_id": "5ebbe780e02fc606c9eff903",
                        "item_id": "5ebbf164638f0712b7373cfa",
                        "quantity": 1,
                        "hour": "2020-05-13T13:19:59.417Z",
                        "date_creation": "2020-05-15T16:51:23.666Z",
                        "id": "5ebec88b0c54defaf3ebc224"
                    }
                }
            }   


## Remove an item from an user [/shoppings_item/{id}/shoppers/undefine/{user_id}]
### /shoppings_item/{id}/shoppers/undefine/{user_id} [POST]

+ Parameters

    + id: 5ebbf164638f0712b7373cfa (identifier) - An unique identifier of an item.
    + user_id: 5e907efcf4e1766b67071ff9 (identifier) - An unique identifier of an user.

+ Response 400 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "item": {
                        "n": 1,
                        "ok": 1,
                        "deletedCount": 1
                    }
                }
            }     


## Edit an item in a shopping list [/shoppings_item/{id}/update]
### /shoppings_item/{id}/update [PUT]

   + Attributes
    + event_id (object, required) - The ID reference of the event
    + name (string, required) - The name of the item

+ Parameters

    + id: 5ebec7a80c54defaf3ebc221 (identifier) - An unique identifier of an item.

+ Request (application/json)

        {
            "name": "mergez",
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "item": {
                        "enable": true,
                        "event_id": "5ebbe780e02fc606c9eff903",
                        "name": "Mergez",
                        "date_creation": "2020-05-15T16:47:36.801Z",
                        "id": "5ebec7a80c54defaf3ebc221"
                    }
                }
            }


## Delete an item in a shopping list [/shoppings_item/{id}/delete]
### /shoppings_item/{id}/delete [DELETE]

+ Parameters

    + id: 5ebec7a80c54defaf3ebc221 (identifier) - An unique identifier of an invitation.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This item has successfully deleted"
                }
            }



# Group Tickets
Group of all tickets-related resources.

## Get all tickets in an event [/tickets/types]
### /tickets/types [GET]

   + Attributes
    + event_id (object, required) - The ID reference of the event

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 2,
                    "ticketTypes": [
                        {
                            "enable": true,
                            "event_id": "5ebbe780e02fc606c9eff903",
                            "name": "Fosse #1",
                            "price": 70,
                            "quantity": "0099-12-31T23:50:39.000Z",
                            "date_creation": "2020-05-14T13:10:07.844Z",
                            "id": "5ebd432fb8881f74efaa2b9c"
                        },
                        {
                            "enable": true,
                            "event_id": "5ebbe780e02fc606c9eff903",
                            "name": "Fosse #1",
                            "price": 70,
                            "quantity": "0099-12-31T23:50:39.000Z",
                            "date_creation": "2020-05-14T17:50:13.315Z",
                            "id": "5ebd84d5af2b3fac9af5a1ea"
                        }
                    ]
                }
            }


## Get all buyed tickets in a ticket-type [/tickets/items/{id}/buyed]
### /tickets/items/{id}/buyed [GET]

+ Parameters

    + id: 5ebd432fb8881f74efaa2b9c (identifier) - An unique identifier of a ticketsType.

+ Response 200 (application/json)

    + Headers
    
            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 1,
                    "tickets": [
                        {
                            "enable": true,
                            "event_id": "5ebbe780e02fc606c9eff903",
                            "ticket_id": "5ebd432fb8881f74efaa2b9c",
                            "user_id": {...},
                            "date_creation": "2020-05-14T13:57:37.222Z",
                            "id": "5ebd4e51bda2f27d295359da"
                        }
                    ]
                }
            }


## Enable tickets [/tickets/enable]
### /tickets/enable [POST]

   + Attributes
    + event_id (object, required) - The ID reference of the event

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "event": {
                        "description": "Passons la quarantaine ensemble à distance",
                        "date_end": "2020-04-12T16:30:00.000Z",
                        "location": "Chez vous",
                        "cover_image": null,
                        "public": true,
                        "shopping_list": true,
                        "tickets": true,
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Quarantaine",
                        "date_begin": "2020-04-10T18:00:00.000Z",
                        "id": "5ebbe780e02fc606c9eff903"
                    }
                }
            }


## Disable tickets [/tickets/disable]
### /tickets/disable [POST]

   + Attributes
    + event_id (object, required) - The ID reference of the event

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "event": {
                        "description": "Passons la quarantaine ensemble à distance",
                        "date_end": "2020-04-12T16:30:00.000Z",
                        "location": "Chez vous",
                        "cover_image": null,
                        "public": false,
                        "shopping_list": true,
                        "tickets": false,
                        "managers": [
                            "5e907efcf4e1766b67071ff9"
                        ],
                        "members": [],
                        "enable": true,
                        "name": "Quarantaine",
                        "date_begin": "2020-04-10T18:00:00.000Z",
                        "id": "5ebbe780e02fc606c9eff903"
                    }
                }
            }


## Create a ticket [/tickets/create]
### /tickets/create [POST]

   + Attributes
    + event_id (object, required) - The ID reference of the event
    + name (string, required) - The name of the ticket
    + price (number, required) - The price of the ticket
    + quantity (number, required) - The quantity of the ticket

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903",
            "name": "Fosse #1",
            "price": "70",
            "quantity": "100"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "ticket": {
                        "enable": true,
                        "event_id": "5ebbe780e02fc606c9eff903",
                        "name": "Fosse #1",
                        "price": 70,
                        "quantity": "0099-12-31T23:50:39.000Z",
                        "date_creation": "2020-05-15T17:00:17.208Z",
                        "id": "5ebecaa10c54defaf3ebc228"
                    }
                }
            }     


## Buy a ticket [/tickets/{id}/buy]
### /tickets/{id}/buy [POST]

   + Attributes
    + event_id (object, required) - The ID reference of the event
    + ticket_id (object, required) - The ID reference of the ticket
    + user_id (object, required) - The ID reference of the user

+ Parameters

    + id: 5ebecaa10c54defaf3ebc228 (identifier) - An unique identifier of a ticket.

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903",
            "ticket_id": "5ebecaa10c54defaf3ebc228",
            "user_id": "5e907efcf4e1766b67071ff9"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "ticket": {
                        "enable": true,
                        "event_id": "5ebbe780e02fc606c9eff903",
                        "ticket_id": "5ebecaa10c54defaf3ebc228",
                        "user_id": "5e907efcf4e1766b67071ff9",
                        "date_creation": "2020-05-15T17:01:48.488Z",
                        "id": "5ebecafc0c54defaf3ebc22a"
                    }
                }
            } 


## Unbuy a ticket [/tickets/{id}/unbuy]
### /tickets/{id}/unbuy [POST]

   + Attributes
    + event_id (object, required) - The ID reference of the event
    + ticket_id (object, required) - The ID reference of the ticket
    + user_id (object, required) - The ID reference of the user

+ Parameters

    + id: 5ebecaa10c54defaf3ebc228 (identifier) - An unique identifier of a ticket.

+ Request (application/json)

        {
            "event_id": "5ebbe780e02fc606c9eff903",
            "ticket_id": "5ebecaa10c54defaf3ebc228",
            "user_id": "5e907efcf4e1766b67071ff9"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "ticket": {
                        "enable": false,
                        "event_id": "5ebbe780e02fc606c9eff903",
                        "ticket_id": "5ebecaa10c54defaf3ebc228",
                        "user_id": {...},
                        "date_creation": "2020-05-15T17:01:48.488Z",
                        "id": "5ebecafc0c54defaf3ebc22a"
                    }
                }
            } 



# Group Users
Group of all users-related resources.

## Get all users [/users]
### /users [GET]

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "total": 3,
                    "users": [
                        {
                            "status": true,
                            "image_profile": "https://www.breizh-info.com/wp-content/uploads/2019/12/chewbacca.jpg",
                            "first_name": "Mikhael",
                            "last_name": "Bailly",
                            "username": "Mikheull",
                            "email": "mikhae.bailly@gmail.com",
                            "password": "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2",
                            "date_creation": "2020-04-10T14:13:16.570Z",
                            "date_modified": "2020-04-10T14:13:16.570Z",
                            "id": "5e907efcf4e1766b67071ff9"
                        },
                        {
                            "status": true,
                            "image_profile": "https://www.as-promotion.fr/wp-content/uploads/2016/09/no-photo.png",
                            "first_name": "Zinedine",
                            "last_name": "Bailly",
                            "username": "Mikheull",
                            "email": "m.bailly@subskill.com",
                            "password": "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2",
                            "date_creation": "2020-04-10T20:50:07.476Z",
                            "date_modified": "2020-04-10T20:50:07.476Z",
                            "id": "5e90dbffb91b1613ba47c510"
                        },
                        {
                            "status": true,
                            "image_profile": "https://www.as-promotion.fr/wp-content/uploads/2016/09/no-photo.png",
                            "first_name": "John",
                            "last_name": "Doe",
                            "username": "John_doe",
                            "email": "john.doe@gmail.com",
                            "password": "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2",
                            "date_creation": "2020-05-04T20:39:16.377Z",
                            "date_modified": "2020-05-04T20:39:16.377Z",
                            "id": "5eb07d747d575b758fe4b196"
                        }
                    ]
                }
            }


## Get a user [/users/{id}]
### /users/{id} [GET]

+ Parameters

    + id: 5eb07d747d575b758fe4b196 (identifier) - An unique identifier of an user.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "user": {
                        "status": true,
                        "image_profile": "https://www.as-promotion.fr/wp-content/uploads/2016/09/no-photo.png",
                        "first_name": "John",
                        "last_name": "Doe",
                        "username": "John_doe",
                        "email": "john.doe@gmail.com",
                        "password": "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2",
                        "date_creation": "2020-05-04T20:39:16.377Z",
                        "date_modified": "2020-05-04T20:39:16.377Z",
                        "id": "5eb07d747d575b758fe4b196"
                    }
                }
            }


## Create an user [/users/create]
### /users/create [POST]

   + Attributes
    + first_name (string) - The firs name of the user
    + last_name (string) - The last name of the user
    + username (string) - The username of the user
    + email (string) - The email of the user
    + password (string) - The password of the user

+ Request (application/json)

        {
            "first_name": "Joe",
            "last_name": "Doe",
            "username": "Joe_doe",
            "email": "joe.gmail.com",
            "password": "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2"
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "user": {
                        "status": true,
                        "image_profile": "https://www.as-promotion.fr/wp-content/uploads/2016/09/no-photo.png",
                        "first_name": "Joe",
                        "last_name": "Doe",
                        "username": "joe_doe",
                        "email": "joe.gmail.com",
                        "password": "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2",
                        "date_creation": "2020-05-15T17:07:04.111Z",
                        "date_modified": "2020-05-15T17:07:04.111Z",
                        "id": "5ebecc380c54defaf3ebc22b"
                    }
                }
            }


## Edit an user [/users/{id}/update]
### /users/{id}/update [PUT]

   + Attributes
    + first_name (string) - The firs name of the user
    + last_name (string) - The last name of the user
    + username (string) - The username of the user
    + email (string) - The email of the user
    + password (string) - The password of the user

+ Parameters

    + id: 5ebecc380c54defaf3ebc22b (identifier) - An unique identifier of a discussion.

+ Request (application/json)

        {
            "username": "Jane",
        }

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "user": {
                        "status": true,
                        "image_profile": "https://www.as-promotion.fr/wp-content/uploads/2016/09/no-photo.png",
                        "first_name": "Joe",
                        "last_name": "Doe",
                        "username": "Jane",
                        "email": "joe.gmail.com",
                        "password": "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2",
                        "date_creation": "2020-05-15T17:07:04.111Z",
                        "date_modified": "2020-05-15T17:07:04.111Z",
                        "id": "5ebecc380c54defaf3ebc22b"
                    }
                }
            }


## Delete an user [/users/{id}/delete]
### /users/{id}/delete [DELETE]

+ Parameters

    + id: 5ebecc380c54defaf3ebc22b (identifier) - An unique identifier of a discussion.

+ Response 200 (application/json)

    + Headers

            x-access-token: 7hd9y8t3GeK4w6hFfgpbT4BKAm5Rgv7qXkhTne85ng8vjPsGTpjgVwtp

    + Body

            {
                "data": {
                    "code": 200,
                    "message": "This user has successfully deleted"
                }
            }