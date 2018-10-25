define({ "api": [
  {
    "type": "post",
    "url": "/addBookcode",
    "title": "",
    "name": "addBookCode",
    "group": "BookCode",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": \"Inserted successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookCode",
            "description": "<p>bookCode must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title must be provided.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/bookcode/routers/router.js",
    "groupTitle": "BookCode"
  },
  {
    "type": "post",
    "url": "/deleteBookcode",
    "title": "",
    "name": "deleteBookcode",
    "group": "BookCode",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": \"Deleted successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookCode",
            "description": "<p>bookCode must be provided.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/bookcode/routers/router.js",
    "groupTitle": "BookCode"
  },
  {
    "type": "post",
    "url": "/updateBookcode",
    "title": "",
    "name": "updateBookcode",
    "group": "BookCode",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": \"Updated successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookCode",
            "description": "<p>bookCode must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title must be provided.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/bookcode/routers/router.js",
    "groupTitle": "BookCode"
  },
  {
    "type": "post",
    "url": "/updateBookcode",
    "title": "",
    "name": "updateBookcode",
    "group": "BookCode",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": [{ \"bookId\": \"1\",\"bookCode\": \"bookcode\", \"title\": \"title\"}],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/bookcode/routers/router.js",
    "groupTitle": "BookCode"
  },
  {
    "type": "post",
    "url": "/addCollection",
    "title": "",
    "name": "addCollection",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Collection name must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": \"Inserted successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/collection/routers/router.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/addCollectionToCourse",
    "title": "",
    "name": "addCollectionToCourse",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courceId",
            "description": "<p>courceId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "collectionIds",
            "description": "<p>collectionIds must be provided. Array of collectionId [{1},{2}].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": \"Updated successfully\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/collection/routers/router.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/addTopicsToCollections",
    "title": "",
    "name": "addTopicsToCollections",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "collectionId",
            "description": "<p>collectionId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "topicIds",
            "description": "<p>topicIds must be provided. Array of topicId [{1},{2}].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": \"Updated successfully\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/collection/routers/router.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/deleteCollection",
    "title": "",
    "name": "deleteCollection",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "collectionId",
            "description": "<p>collectionId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": \"Deleted successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/collection/routers/router.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/deleteCollectionInfo",
    "title": "",
    "name": "deleteCollectionInfo",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "collectionId",
            "description": "<p>collectionId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": false,\n  \"data\": \"\",\n  \"message\": \"This Collection mapped under Courses(1) and Topics(0). Did You want to delete?\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/collection/routers/router.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/editCollection",
    "title": "",
    "name": "editCollection",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "collectionId",
            "description": "<p>collectionId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Collection name must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": \"updated successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/collection/routers/router.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/getAllCollection",
    "title": "",
    "name": "getAllCollection",
    "group": "Collection",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": [{ \"collectionId\": \"1\",\"name\": \"name\"}],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/collection/routers/router.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/getCollectionWithTopic",
    "title": "",
    "name": "getCollectionWithTopic",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "collectionId",
            "description": "<p>collectionId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": {\n             \"collectionInformation\":{\"collectionId\":1,\"collectionName\":\"name\"},\n             \"topicList\":[{\"topicId\":1,\"topicName\":\"topic\"}]\n          },\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/collection/routers/router.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/getCourseCollections",
    "title": "",
    "name": "getCourseCollections",
    "group": "Collection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": [{\"collectionId\":1,\"bookId\":1,\"collectionName\":\"sample\"}],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/collection/routers/router.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/getCourseDetail",
    "title": "",
    "name": "getCourseDetail",
    "group": "CourseHome",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": [{\"bookCode\":\"code\",\"bookId\":1,\"customContent\":\"some text\",\"templateId\":1}],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/courseHome/routers/router.js",
    "groupTitle": "CourseHome"
  },
  {
    "type": "get",
    "url": "/getCourseHome",
    "title": "",
    "name": "getCourseHome",
    "group": "CourseHome",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookCode",
            "description": "<p>bookCode must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\": [{\"bookCode\":1,\"bookId\":1,\"customContent\":\"some text\",\"templateId\":1}],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/courseHome/routers/router.js",
    "groupTitle": "CourseHome"
  },
  {
    "type": "post",
    "url": "/updateCourseHome",
    "title": "",
    "name": "updateCourseHome",
    "group": "CourseHome",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customContent",
            "description": "<p>customContent must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "templateId",
            "description": "<p>templateId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Updated successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/courseHome/routers/router.js",
    "groupTitle": "CourseHome"
  },
  {
    "type": "get",
    "url": "/getAllCourseVideos",
    "title": "",
    "name": "getAllCourseVideos",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":[{\"bookId\":1,\"collectionId\":1,\"collectionName\":\"name\",\"subTopicId\":1,\"topicId\":1,\"vidoeId\":1,\"clipInfo\":\"info\",\"duration\":\"\",\"embeddingUrl\":\"\",\"title\":\"\",\"thumbnailUrl\":\"\"}],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/courses/routers/router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/getAllCourses",
    "title": "",
    "name": "getAllCourses",
    "group": "Courses",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":[{\"bookId\":1,\"courseName\":\"name\",\"productTitle\":\"title\",\"isbn\":\"\",\"author\":\"\",\"bookCode\":\"code\"}],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/courses/routers/router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/deleteFavoriteVideo",
    "title": "",
    "name": "deleteFavoriteVideo",
    "group": "Favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "favoriteId",
            "description": "<p>favoriteId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":'Removed from favorite',\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/favorite/routers/router.js",
    "groupTitle": "Favorite"
  },
  {
    "type": "post",
    "url": "/getFavoriteVideos",
    "title": "",
    "name": "getFavoriteVideos",
    "group": "Favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":{ video: [\n                   {\"favoriteId\":1,\n                    \"bookId\":1,\n                    \"videoId\":1,\n                    \"clipInfo\":\"info\",\n                    \"embeddingUrl\":\"someurl.com\",\n                    \"title\":\"title\",\n                    \"duration\":\"10:10\",\n                    \"ThumbnailURL\":\"\"}\n                  ], \n           tags: [\n                  {\"vidoeId\":1,\n                   \"tagId\":1,\n                   \"tagName\":\"name\"}\n                 ], \n           resources: [\n                       {\"resourceUrl\":\"\",\n                        \"videoId\":1,\n                        \"resourceName\":\"name.pdf\"}\n                      ] \n          },\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/favorite/routers/router.js",
    "groupTitle": "Favorite"
  },
  {
    "type": "post",
    "url": "/saveVideoAsFavorite",
    "title": "",
    "name": "saveVideoAsFavorite",
    "group": "Favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "videoId",
            "description": "<p>videoId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Added as favorite\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/favorite/routers/router.js",
    "groupTitle": "Favorite"
  },
  {
    "type": "post",
    "url": "/addVideoToPlaylist",
    "title": "",
    "name": "addVideoToPlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "playlistId",
            "description": "<p>playlistId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "videoId",
            "description": "<p>videoId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":'Added successfully.',\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/playlist/routers/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "post",
    "url": "/createPlaylist",
    "title": "",
    "name": "createPlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "playlistId",
            "description": "<p>playlistId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":1,\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/playlist/routers/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "post",
    "url": "/deletePlaylist",
    "title": "",
    "name": "deletePlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "playlistId",
            "description": "<p>playlistId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":'Deleted successfully',\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/playlist/routers/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "post",
    "url": "/deleteVideoFromPlaylist",
    "title": "",
    "name": "deleteVideoFromPlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "playlistId",
            "description": "<p>playlistId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "videoId",
            "description": "<p>videoId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":'Removed successfully',\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/playlist/routers/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "post",
    "url": "/getPlaylist",
    "title": "",
    "name": "getPlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":[{\"playlistId\":1,\"name\":\"name\"}],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/playlist/routers/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "post",
    "url": "/getVideoForPlaylist",
    "title": "",
    "name": "getVideoForPlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "playlistId",
            "description": "<p>playlistId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":{ video:[{\n             \"videoId\":1,            \n             \"playListId\":1,\n             \"clipInfo\":\"\",\n             \"title\":\"\",\n             \"embeddingUrl\":\"\"}],\n           tags:[{\n                 \"vidoeId\":1,\n                 \"tagId\":1,\n                 \"tagName\":\"\"}],\n           resources:[{\n                     \"resourceUrl\":\"\",\n                     \"videoId\":1,\n                     \"resourceName\":\"\"}]\n         },\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/playlist/routers/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "post",
    "url": "/reOrderVideoInPlaylist",
    "title": "",
    "name": "reOrderVideoInPlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "videoId",
            "description": "<p>videoId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "orderId",
            "description": "<p>orderId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "playlistId",
            "description": "<p>playlistId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":true,\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/playlist/routers/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "post",
    "url": "/updatePlaylist",
    "title": "",
    "name": "updatePlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "playlistId",
            "description": "<p>playlistId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":1,\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/playlist/routers/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "post",
    "url": "/adminAuthenticate",
    "title": "",
    "name": "adminAuthenticate",
    "group": "SmsUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":{},\n  \"token\":\"sdjflksdjfkdsj.dfsadolfsd.sadf\"\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/smsuser/routers/router.js",
    "groupTitle": "SmsUser"
  },
  {
    "type": "post",
    "url": "/deleteTag",
    "title": "",
    "name": "deleteTag",
    "group": "SmsUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tagId",
            "description": "<p>tagId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Deleted Successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/tag/routers/router.js",
    "groupTitle": "SmsUser"
  },
  {
    "type": "get",
    "url": "/getAllCourseForUser",
    "title": "",
    "name": "getAllCourseForUser",
    "group": "SmsUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":[{\n        \"UserId\": \"19\",\n        \"bookId\": \"2\",\n        \"BookCode\": \"norman_mbcp1\",\n        \"CourseName\": \"Billstein - MyMathLab for QA of VDW\",\n        \"ProductTitle\": null,\n        \"ISBN\": \"9783161484100\",\n        \"Author\": null,\n        \"CreatedOn\": \"2018-05-17T00:00:00.000Z\",\n        \"CreatedBy\": \"1\"\n    }],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/smsuser/routers/router.js",
    "groupTitle": "SmsUser"
  },
  {
    "type": "get",
    "url": "/getAllSmsUsers",
    "title": "",
    "name": "getAllSmsUsers",
    "group": "SmsUser",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":[{\n             \"UserId\": \"4\",\n                \"UserName\": \"janvi\",\n                \"FirstName\": \"Janvi\",\n                \"MiddleName\": \"K\",\n                \"LastName\": \"Khan\",\n                \"EmailId\": \"janvi@gmail.com\",\n                \"Password\": \"$2a$10$6Gaa6mVN50pGgHE0bZ5fbe7zIZlJcBbfQYMkdm9JxD4oRj8cG5S2y\",\n                \"RoleId\": \"3\",\n                \"SecurityQuestionId\": 4,\n                \"SubscribedLibraryId\": \"2\",\n                \"SecurityAnswer\": \"Red\",\n                \"CreatedOn\": \"2018-02-26T00:00:00.000Z\"\n         }],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/smsuser/routers/router.js",
    "groupTitle": "SmsUser"
  },
  {
    "type": "post",
    "url": "/lti",
    "title": "",
    "name": "lti",
    "group": "SmsUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oauth_consumer_key",
            "description": "<p>oauth_consumer_key must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 301 \nredirect to course home page",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/smsuser/routers/router.js",
    "groupTitle": "SmsUser"
  },
  {
    "type": "post",
    "url": "/ltiGenerateToken",
    "title": "",
    "name": "ltiGenerateToken",
    "group": "SmsUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custom_person_name",
            "description": "<p>custom_person_name must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "custom_person_id",
            "description": "<p>custom_person_id must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":'',\n  \"message\": \"success\",\n  \"token\":\"sdjflksdjfkdsj.dfsadolfsd.sadf\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/smsuser/routers/router.js",
    "groupTitle": "SmsUser"
  },
  {
    "type": "get",
    "url": "/deleteTagInfo",
    "title": "",
    "name": "deleteTagInfo",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tagId",
            "description": "<p>tagId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Tag not mapped in any video.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/tag/routers/router.js",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/getAllTags",
    "title": "",
    "name": "getAllTags",
    "group": "Tag",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":[ {\n        \"tagId\": \"4\",\n        \"name\": \"Counting\"\n    }],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/tag/routers/router.js",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/getAllTagsForTopic",
    "title": "",
    "name": "getAllTagsForTopic",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":[{\n        \"tagId\": \"9\",\n        \"name\": \"Unknown number\",\n        \"videoId\": \"6\",\n        \"topicId\": \"5\"\n    }],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/tag/routers/router.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/insertTag",
    "title": "",
    "name": "insertTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tagId",
            "description": "<p>tagId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Inserted successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/tag/routers/router.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/updateTag",
    "title": "",
    "name": "updateTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tagId",
            "description": "<p>tagId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Updated successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/tag/routers/router.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/createTemplate",
    "title": "",
    "name": "createTemplate",
    "group": "Template",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "templateContent",
            "description": "<p>templateContent must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "templateName",
            "description": "<p>templateName must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Created successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/template/routers/router.js",
    "groupTitle": "Template"
  },
  {
    "type": "get",
    "url": "/deleteTemplate",
    "title": "",
    "name": "deleteTemplate",
    "group": "Template",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "templateId",
            "description": "<p>templateId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Deleted successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/template/routers/router.js",
    "groupTitle": "Template"
  },
  {
    "type": "get",
    "url": "/getAllTemplate",
    "title": "",
    "name": "getAllTemplate",
    "group": "Template",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":[{\n        \"templateId\": \"9\",\n        \"templateName\": \"Unknown number\",\n        \"templateContent\": \"some content\"\n    }],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/template/routers/router.js",
    "groupTitle": "Template"
  },
  {
    "type": "get",
    "url": "/getTemplateDetails",
    "title": "",
    "name": "getTemplateDetails",
    "group": "Template",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "templateId",
            "description": "<p>templateId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":[{\n        \"templateId\": \"9\",\n        \"templateName\": \"Unknown number\",\n        \"templateContent\": \"some content\"\n    }],\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/template/routers/router.js",
    "groupTitle": "Template"
  },
  {
    "type": "post",
    "url": "/updateTemplate",
    "title": "",
    "name": "updateTemplate",
    "group": "Template",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "templateId",
            "description": "<p>templateId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "templateContent",
            "description": "<p>templateContent must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "templateName",
            "description": "<p>templateName must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Updated successfully.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/template/routers/router.js",
    "groupTitle": "Template"
  },
  {
    "type": "post",
    "url": "/createSubTopic",
    "title": "",
    "name": "createSubTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subTopicId",
            "description": "<p>subTopicId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": 1,\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "post",
    "url": "/createTopic",
    "title": "",
    "name": "createTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Created successfully.\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/deleteCollectionTopic",
    "title": "",
    "name": "deleteCollectionTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": true,\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "post",
    "url": "/deleteSubTopic",
    "title": "",
    "name": "deleteSubTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subTopicId",
            "description": "<p>subTopicId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Deleted successfully.\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "post",
    "url": "/deleteSubTopicInfo",
    "title": "",
    "name": "deleteSubTopicInfo",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subTopicId",
            "description": "<p>subTopicId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"No videos under this subTopic.\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/deleteTopic",
    "title": "",
    "name": "deleteTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Deleted successfully.\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/deleteVideoFromSubTopic",
    "title": "",
    "name": "deleteVideoFromSubTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subTopicId",
            "description": "<p>subTopicId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "videoId",
            "description": "<p>videoId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Deleted successfully.\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/deleteVideoFromTopic",
    "title": "",
    "name": "deleteVideoFromTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "videoId",
            "description": "<p>videoId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Deleted Successfully.\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "post",
    "url": "/getAllTopicAndSubTopic",
    "title": "",
    "name": "getAllTopicAndSubTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": {\"topics\": [\n        {\n            \"topicId\": \"2\",\n            \"name\": \"Etilogical Theories of Substance sAbuse\"\n        },\n        {\n            \"topicId\": \"13\",\n            \"name\": \"Career Counseling\"\n        },\n        {\n            \"topicId\": \"27\",\n            \"name\": \"Counseling Theories\"\n        },\n        {\n            \"topicId\": \"45\",\n            \"name\": \"Introduction to Counseling\"\n        }\n    ],\n    \"subTopics\": [\n        {\n            \"subTopicId\": \"3\",\n            \"topicId\": \"2\",\n            \"name\": \"Introduction to Substance Abuse Counseling\"\n        },\n        {\n            \"subTopicId\": \"4\",\n            \"topicId\": \"2\",\n            \"name\": \"The Major Substsances of Abuse and the Body\"\n        },\n    ]\n    },\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/getAllTopicAndSubTopic",
    "title": "",
    "name": "getAllTopicAndSubTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": {\n    \"topics\": [\n        {\n            \"topicId\": \"2\",\n            \"name\": \"Etilogical Theories of Substance sAbuse\"\n        },\n        {\n            \"topicId\": \"13\",\n            \"name\": \"Career Counseling\"\n        },\n        {\n            \"topicId\": \"27\",\n            \"name\": \"Counseling Theories\"\n        },\n        {\n            \"topicId\": \"45\",\n            \"name\": \"Introduction to Counseling\"\n        }\n    ],\n    \"subTopics\": [\n        {\n            \"subTopicId\": \"3\",\n            \"topicId\": \"2\",\n            \"name\": \"Introduction to Substance Abuse Counseling\"\n        },\n        {\n            \"subTopicId\": \"4\",\n            \"topicId\": \"2\",\n            \"name\": \"The Major Substsances of Abuse and the Body\"\n        },\n        {\n            \"subTopicId\": \"5\",\n            \"topicId\": \"2\",\n            \"name\": \"Etilogical Theories of Substance Abuse\"\n        },\n        {\n            \"subTopicId\": \"6\",\n            \"topicId\": \"2\",\n            \"name\": \"Assessment and Diagnosis\"\n        },\n        {\n            \"subTopicId\": \"7\",\n            \"topicId\": \"2\",\n            \"name\": \"Treatment Setting and Treatment Planning\"\n        }\n    ]\n},\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/selectAllTopic",
    "title": "",
    "name": "selectAllTopic",
    "group": "Topic",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": [\n                {\n                \"topicId\": \"2\",\n                \"name\": \"Etilogical Theories of Substance sAbuse\"\n                },\n                {\n                \"topicId\": \"13\",\n                \"name\": \"Career Counseling\"\n                }\n            ],\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/selectSubTopic",
    "title": "",
    "name": "selectSubTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": [\n                {\n                 \"subTopicId\": \"89\",\n                 \"name\": \"sample sub topic\",\n                 \"topicId\": \"1\"\n                }\n            ],\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/selectTopic",
    "title": "",
    "name": "selectTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": [\n                {\n                 \"topicId\": \"13\",\n                 \"name\": \"Career Counseling\",\n                 \"course_id\": \"1\"\n                },\n                {\n                 \"topicId\": \"27\",\n                 \"name\": \"Counseling Theories\",\n                 \"course_id\": \"1\"\n                }\n            ],\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/selectVideoForSubTopic",
    "title": "",
    "name": "selectVideoForSubTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subTopicId",
            "description": "<p>subTopicId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": {\n    \"video\": [\n        {\n            \"videoId\": \"2\",\n            \"topicId\": \"120\",\n            \"title\": \"Maths problem solving\",\n            \"clipInfo\": \"Desc 01\",\n            \"embeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0147_iPad\",\n            \"thumbnailUrl\": null,\n            \"duration\": \"10:10\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"3\",\n            \"topicId\": \"120\",\n            \"title\": \"Lorem Ipsum\",\n            \"clipInfo\": \"Desc 02\",\n            \"embeddingUrl\": \"https://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0101_iPad_1158736451792_mp4_video_960x720_1800000_primary_audio_eng_4_1920x360_1158734403966.jpg\",\n            \"thumbnailUrl\": null,\n            \"duration\": \"11:10\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"4\",\n            \"topicId\": \"121\",\n            \"title\": \"Title 01\",\n            \"clipInfo\": \"Desc 01\",\n            \"embeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/imap-0184_iPad\",\n            \"thumbnailUrl\": null,\n            \"duration\": \"10:10\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"5\",\n            \"topicId\": \"121\",\n            \"title\": \"Title02\",\n            \"clipInfo\": \"Desc 01\",\n            \"embeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/imap-0185_iPad\",\n            \"thumbnailUrl\": \"http://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0100_iPad_1158736451837_mp4_video_960x720_2432000_primary_audio_eng_5_1920x240_1158737987541.jpg\",\n            \"duration\": \"10:10\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"17\",\n            \"topicId\": \"76\",\n            \"title\": \"v t 01\",\n            \"clipInfo\": \"c i\",\n            \"embeddingUrl\": \"https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp\",\n            \"thumbnailUrl\": null,\n            \"duration\": \"0\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"23\",\n            \"topicId\": \"76\",\n            \"title\": \"v t\",\n            \"clipInfo\": \"c i\",\n            \"embeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0117_iPad\",\n            \"thumbnailUrl\": \"https://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/699/imap-0117_iPad_1158736963767_mp4_video_960x720_2432000_primary_audio_eng_5_84x64_1158736964002.jpg\",\n            \"duration\": \"00:00:55\",\n            \"favoriteId\": null\n        }\n    ],\n    \"tags\": [\n        {\n            \"vidoeId\": \"17\",\n            \"tagId\": \"10\",\n            \"tagName\": \"Numeric 01\"\n        },\n        {\n            \"vidoeId\": \"17\",\n            \"tagId\": \"16\",\n            \"tagName\": \"Part unknown\"\n        },\n        {\n            \"vidoeId\": \"17\",\n            \"tagId\": \"25\",\n            \"tagName\": \"equal groups\"\n        },\n        {\n            \"vidoeId\": \"23\",\n            \"tagId\": \"19\",\n            \"tagName\": \"distributive property\"\n        }\n    ],\n    \"resources\": [\n        {\n            \"resourceUrl\": \"https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0117_iPad\",\n            \"videoId\": \"23\",\n            \"resourceName\": \"d\"\n        },\n        {\n            \"resourceUrl\": \"https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp\",\n            \"videoId\": \"17\",\n            \"resourceName\": \"r 1\"\n        },\n        {\n            \"resourceUrl\": \"https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp\",\n            \"videoId\": \"17\",\n            \"resourceName\": \"r 2\"\n        }\n    ]\n},\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "get",
    "url": "/selectVideoForTopic",
    "title": "",
    "name": "selectVideoForTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": {\n    \"video\": [\n        {\n            \"videoId\": \"2\",\n            \"topicId\": \"120\",\n            \"title\": \"Maths problem solving\",\n            \"clipInfo\": \"Desc 01\",\n            \"embeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0147_iPad\",\n            \"thumbnailUrl\": null,\n            \"duration\": \"10:10\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"3\",\n            \"topicId\": \"120\",\n            \"title\": \"Lorem Ipsum\",\n            \"clipInfo\": \"Desc 02\",\n            \"embeddingUrl\": \"https://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0101_iPad_1158736451792_mp4_video_960x720_1800000_primary_audio_eng_4_1920x360_1158734403966.jpg\",\n            \"thumbnailUrl\": null,\n            \"duration\": \"11:10\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"4\",\n            \"topicId\": \"121\",\n            \"title\": \"Title 01\",\n            \"clipInfo\": \"Desc 01\",\n            \"embeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/imap-0184_iPad\",\n            \"thumbnailUrl\": null,\n            \"duration\": \"10:10\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"5\",\n            \"topicId\": \"121\",\n            \"title\": \"Title02\",\n            \"clipInfo\": \"Desc 01\",\n            \"embeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/imap-0185_iPad\",\n            \"thumbnailUrl\": \"http://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0100_iPad_1158736451837_mp4_video_960x720_2432000_primary_audio_eng_5_1920x240_1158737987541.jpg\",\n            \"duration\": \"10:10\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"17\",\n            \"topicId\": \"76\",\n            \"title\": \"v t 01\",\n            \"clipInfo\": \"c i\",\n            \"embeddingUrl\": \"https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp\",\n            \"thumbnailUrl\": null,\n            \"duration\": \"0\",\n            \"favoriteId\": null\n        },\n        {\n            \"videoId\": \"23\",\n            \"topicId\": \"76\",\n            \"title\": \"v t\",\n            \"clipInfo\": \"c i\",\n            \"embeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0117_iPad\",\n            \"thumbnailUrl\": \"https://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/699/imap-0117_iPad_1158736963767_mp4_video_960x720_2432000_primary_audio_eng_5_84x64_1158736964002.jpg\",\n            \"duration\": \"00:00:55\",\n            \"favoriteId\": null\n        }\n    ],\n    \"tags\": [\n        {\n            \"vidoeId\": \"17\",\n            \"tagId\": \"10\",\n            \"tagName\": \"Numeric 01\"\n        },\n        {\n            \"vidoeId\": \"17\",\n            \"tagId\": \"16\",\n            \"tagName\": \"Part unknown\"\n        },\n        {\n            \"vidoeId\": \"17\",\n            \"tagId\": \"25\",\n            \"tagName\": \"equal groups\"\n        },\n        {\n            \"vidoeId\": \"23\",\n            \"tagId\": \"19\",\n            \"tagName\": \"distributive property\"\n        }\n    ],\n    \"resources\": [\n        {\n            \"resourceUrl\": \"https://mediaplayer.pearsoncmg.com/assets/_video.true/imap-0117_iPad\",\n            \"videoId\": \"23\",\n            \"resourceName\": \"d\"\n        },\n        {\n            \"resourceUrl\": \"https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp\",\n            \"videoId\": \"17\",\n            \"resourceName\": \"r 1\"\n        },\n        {\n            \"resourceUrl\": \"https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp\",\n            \"videoId\": \"17\",\n            \"resourceName\": \"r 2\"\n        }\n    ]\n},\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "post",
    "url": "/updateSubTopic",
    "title": "",
    "name": "updateSubTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subTopicId",
            "description": "<p>subTopicId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": 1,\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "post",
    "url": "/updateTopic",
    "title": "",
    "name": "updateTopic",
    "group": "Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topicId",
            "description": "<p>topicId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>bookId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Updated successfully.\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/topic/routers/router.js",
    "groupTitle": "Topic"
  },
  {
    "type": "post",
    "url": "/addAdminUsers",
    "title": "",
    "name": "addAdminUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>userName must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>middleName must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailId",
            "description": "<p>emailId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updaterId",
            "description": "<p>updaterId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Inserted successfully.\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/user/routers/router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/deleteAdminUsers",
    "title": "",
    "name": "deleteAdminUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updaterId",
            "description": "<p>updaterId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Deleted successfully\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/user/routers/router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/editAdminUsers",
    "title": "",
    "name": "editAdminUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>userName must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>middleName must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailId",
            "description": "<p>emailId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updaterId",
            "description": "<p>updaterId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Updated successfully\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/user/routers/router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/forgotPassword",
    "title": "",
    "name": "forgotPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>userName must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": true,\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/user/routers/router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/getAdminUsers",
    "title": "",
    "name": "getAdminUsers",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": [\n        {\n        \"userId\": 1,\n        \"userName\": \"mail@mail.com\",\n        \"firstName\": \"name\",\n        \"middleName\": \"name\",\n        \"lastName\": \"name\",\n        \"emailId\": \"mail@mail.com\"\n        }\n    ],\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/user/routers/router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/updateAdminPassword",
    "title": "",
    "name": "updateAdminPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>userName must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>oldPassword must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>newPassword must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": \"Updated successfully.\",\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/user/routers/router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getVideoDetails",
    "title": "",
    "name": "getVideoDetails",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "videoId",
            "description": "<p>videoId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":{\n \"userId\": \"\",\n    \"clipInfo\": \"Desc 01\",\n    \"videoId\": \"\",\n    \"duration\": \"\",\n    \"embeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/imap-0185_iPad\",\n    \"title\": \"Title02\",\n    \"thumbnailUrls\": [\n        {\n            \"Id\": \"6\",\n            \"ThumbnailURL\": \"http://pearson-a.akamaihd.net/thumbnail/Pearson_Education/162/199/imap-0100_iPad_1158736451837_mp4_video_960x720_2432000_primary_audio_eng_5_1920x240_1158737987541.jpg\",\n            \"VideoId\": \"5\"\n        }\n    ],\n    \"tagDetail\": [],\n    \"topicDetail\": [],\n    \"subTopicDetail\": [\n        {\n            \"id\": \"4\",\n            \"subTopicId\": \"121\",\n            \"Name\": \"sb4\",\n            \"topicId\": \"76\"\n        },\n        {\n            \"id\": \"5\",\n            \"subTopicId\": \"5\",\n            \"Name\": \"Etilogical Theories of Substance Abuse\",\n            \"topicId\": \"2\"\n        }\n    ],\n    \"resourceDetail\": []\n         },\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/video/routers/router.js",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/getVideoInfo",
    "title": "",
    "name": "getVideoInfo",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "videoId",
            "description": "<p>videoId must be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": {\n        \"videoId\": \"5\",\n        \"title\": \"Title02\",\n        \"clipInfo\": \"Desc 01\",\n        \"EmbeddingUrl\": \"https://mediaplayer.pearsoncmg.com/assets/imap-0185_iPad\",\n        \"duration\": \"10:10\"\n        },\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/video/routers/router.js",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/unallocatedVideos",
    "title": "",
    "name": "unallocatedVideos",
    "group": "Video",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"isSuccess\": true,\n    \"data\": [\n        {\n        \"clipInfo\": \"clip info\",\n        \"duration\": \"0\",\n        \"title\": \"v t 1\",\n        \"videoId\": \"15\",\n        \"embeddingUrl\": \"https://github.com/Pearson-Higher-Ed\"\n        }\n    ],\n    \"message\": \"success\"\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/video/routers/router.js",
    "groupTitle": "Video"
  },
  {
    "type": "post",
    "url": "/updateVideoDetails",
    "title": "",
    "name": "updateVideoDetails",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clipInfo",
            "description": "<p>clipInfo must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "videoId",
            "description": "<p>videoId must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>duration must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "embeddingUrl",
            "description": "<p>embeddingUrl must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title must be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "thumbnailUrls",
            "description": "<p>thumbnailUrls must be provided[{&quot;id&quot;:1,&quot;size&quot;:&quot;60&quot;,&quot;thumbnailUrl&quot;:&quot;url.com&quot;,&quot;isActive&quot;:1}].</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "tagDetail",
            "description": "<p>tagDetail must be provided. Array of tags[{&quot;id&quot;:1,&quot;tagId&quot;:1,&quot;name&quot;:&quot;&quot;,&quot;isActive&quot;:1}].</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "topicDetail",
            "description": "<p>topicDetail must be provided. Array of topics[{&quot;id&quot;:1,&quot;topicId&quot;:1,&quot;name&quot;:&quot;name&quot;,&quot;isActive&quot;:1}].</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "subTopicDetail",
            "description": "<p>subTopicDetail must be provided. Array of subTopics[{&quot;id&quot;:1,&quot;topicId&quot;:1,&quot;subTopicId&quot;:2,&quot;name&quot;:&quot;name&quot;,&quot;isActive&quot;:1}].</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "resourceDetail",
            "description": "<p>resourceDetail must be provided. Array of resources[{&quot;resourceId&quot;:1,&quot;name&quot;:&quot;name.pdf&quot;,&quot;resourceUrl&quot;:&quot;url.com&quot;,&quot;isActive&quot;:1}].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":1,\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/video/routers/router.js",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/",
    "title": "",
    "name": "WelcomeAPI",
    "group": "Welcome",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isSuccess\": true,\n  \"data\":\"Welcome to Pearson API.\",\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/modules/welcome/routers/router.js",
    "groupTitle": "Welcome"
  }
] });
