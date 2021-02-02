define({ "api": [
  {
    "type": "post",
    "url": "/aas/imp",
    "title": "Add ModuleImplementation to Session",
    "name": "AddModleImp",
    "group": "AAS",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "sessionId",
            "description": "<p>Session unique ID</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "impId",
            "description": "<p>Implementation unique ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./AASConfigurationController.java",
    "groupTitle": "AAS"
  },
  {
    "type": "delete",
    "url": "/aas",
    "title": "Close AAS session",
    "name": "CloseSession",
    "group": "AAS",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Session unique ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./AASConfigurationController.java",
    "groupTitle": "AAS"
  },
  {
    "type": "post",
    "url": "/aas",
    "title": "Post AAS session",
    "name": "CreateSession",
    "group": "AAS",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sessionId",
            "description": "<p>Session unique ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./AASConfigurationController.java",
    "groupTitle": "AAS"
  },
  {
    "type": "delete",
    "url": "/aas/imp",
    "title": "",
    "name": "DeleteModleImp",
    "group": "AAS",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "sessionId",
            "description": "<p>Session unique ID</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "impId",
            "description": "<p>Implementation unique ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./AASConfigurationController.java",
    "groupTitle": "AAS"
  },
  {
    "type": "get",
    "url": "/aas/:id/generate",
    "title": "Generates a .java file which starts the AAS",
    "name": "GenerateJavaClass",
    "group": "AAS",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
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
            "field": "sessionId",
            "description": "<p>Session unique ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./AASConfigurationController.java",
    "groupTitle": "AAS"
  },
  {
    "type": "get",
    "url": "/aas/imp/configuration",
    "title": "Get Configuration from ModuleImplementation in Session",
    "name": "GetConfiguration",
    "group": "AAS",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "sessionId",
            "description": "<p>Session unique ID</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "impId",
            "description": "<p>Implementation unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n   \"name\":\"parent\",\n   \"keyExpression\":{\n      \"expressionStart\":\"<parent>\",\n      \"expressionEnd\":\"<parent>\"\n   },\n   \"children\":[],\n   \"dependentModuleImps\":[\n   {\n      \"implementationId\":10,\n      \"author\":{},\n      \"name\":\"handler_10\",\n         \"scope\":{\n            \"impScope\":\"SHARED\"\n         },\n         \"messageType\":{\n            \"implementationId\":3,\n            \"author\":{}\n            \"name\":\"messageType_3\",\n            \"scope\":{\n               \"impScope\":\"SHARED\"\n            }\n         },\n         \"generics\":[\n            {\n               \"implementationId\":3,\n               \"author\":{},\n               \"name\":\"messageType_3\",\n               \"scope\":{\n                  \"impScope\":\"SHARED\"\n               }\n            }\n         ]\n      },\n      {\n         \"implementationId\":7,\n         \"author\":{},\n         \"name\":\"deserializer_7\",\n         \"scope\":{\n            \"impScope\":\"SHARED\"\n         },\n         \"protocolType\":{\n            \"implementationId\":0,\n            \"author\":{},\n            \"name\":\"protocolType_0\",\n            \"scope\":{\n               \"impScope\":\"SHARED\"\n            }\n         },\n         \"messageType\":{\n            \"implementationId\":3,\n            \"author\":{},\n            \"name\":\"messageType_3\",\n            \"scope\":{\n               \"impScope\":\"SHARED\"\n            }\n         },\n         \"generics\":[\n            {\n               \"implementationId\":0,\n               \"author\":{},\n               \"name\":\"protocolType_0\",\n               \"scope\":{\n                  \"impScope\":\"SHARED\"\n               }\n            },\n            {\n               \"implementationId\":3,\n               \"author\":{},\n               \"name\":\"messageType_3\",\n               \"scope\":{\n                  \"impScope\":\"SHARED\"\n               }\n            }\n         ]\n      }\n   ],\n   \"moduleImp\":null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./AASConfigurationController.java",
    "groupTitle": "AAS"
  },
  {
    "type": "put",
    "url": "/aas/imp/configuration",
    "title": "Update Configuration from ModuleImplementation in Session",
    "name": "PutConfiguration",
    "group": "AAS",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "sessionId",
            "description": "<p>Session unique ID</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "impId",
            "description": "<p>Implementation unique ID</p>"
          },
          {
            "group": "Request body",
            "type": "Configuration",
            "optional": false,
            "field": "configuration",
            "description": "<p>Configuration of the specified Implementation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"sessionId\":1,\n   \"impId\":1,\n   \"configuration\":{\n      \"name\":\"parent\",\n      \"keyExpression\":{\n         \"expressionStart\":\"<parent>\",\n         \"expressionEnd\":\"<parent>\"\n      },\n      \"children\":[\n\n      ],\n      \"dependentModuleImps\":[\n         {\n            \"implementationId\":10,\n            \"author\":{\n\n            },\n            \"name\":\"handler_10\",\n            \"scope\":{\n               \"impScope\":\"SHARED\"\n            },\n            \"messageType\":{\n               \"implementationId\":3,\n               \"author\":{\n\n               },\n               \"name\":\"messageType_3\",\n               \"scope\":{\n                  \"impScope\":\"SHARED\"\n               }\n            },\n            \"generics\":[\n               {\n                  \"implementationId\":3,\n                  \"author\":{\n\n                  },\n                  \"name\":\"messageType_3\",\n                  \"scope\":{\n                     \"impScope\":\"SHARED\"\n                  }\n               }\n            ]\n         },\n         {\n            \"implementationId\":7,\n            \"author\":{\n\n            },\n            \"name\":\"deserializer_7\",\n            \"scope\":{\n               \"impScope\":\"SHARED\"\n            },\n            \"protocolType\":{\n               \"implementationId\":0,\n               \"author\":{\n\n               },\n               \"name\":\"protocolType_0\",\n               \"scope\":{\n                  \"impScope\":\"SHARED\"\n               }\n            },\n            \"messageType\":{\n               \"implementationId\":3,\n               \"author\":{\n\n               },\n               \"name\":\"messageType_3\",\n               \"scope\":{\n                  \"impScope\":\"SHARED\"\n               }\n            },\n            \"generics\":[\n               {\n                  \"implementationId\":0,\n                  \"author\":{\n\n                  },\n                  \"name\":\"protocolType_0\",\n                  \"scope\":{\n                     \"impScope\":\"SHARED\"\n                  }\n               },\n               {\n                  \"implementationId\":3,\n                  \"author\":{\n\n                  },\n                  \"name\":\"messageType_3\",\n                  \"scope\":{\n                     \"impScope\":\"SHARED\"\n                  }\n               }\n            ]\n         }\n      ],\n      \"moduleImp\":null\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./AASConfigurationController.java",
    "groupTitle": "AAS"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/doc/main.js",
    "group": "C:\\Users\\maxig\\IdeaProjects\\api-master\\src\\main\\java\\eskavi\\controller\\doc\\doc\\main.js",
    "groupTitle": "C:\\Users\\maxig\\IdeaProjects\\api-master\\src\\main\\java\\eskavi\\controller\\doc\\doc\\main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\maxig\\IdeaProjects\\api-master\\src\\main\\java\\eskavi\\controller\\doc\\main.js",
    "groupTitle": "C:\\Users\\maxig\\IdeaProjects\\api-master\\src\\main\\java\\eskavi\\controller\\doc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/imp/:id/user",
    "title": "Add User to Implementation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Implementation unique ID</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User object</p>"
          }
        ]
      }
    },
    "name": "AddUserToImplementation",
    "group": "Implementation",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./ImpController.java",
    "groupTitle": "Implementation"
  },
  {
    "type": "delete",
    "url": "/imp/:id",
    "title": "Delete Implementation",
    "name": "DeleteImplementation",
    "group": "Implementation",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
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
            "field": "id",
            "description": "<p>Implementation unique ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\": \"ImplementationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ImpController.java",
    "groupTitle": "Implementation"
  },
  {
    "type": "get",
    "url": "/imp/:id",
    "title": "Get Implementation",
    "name": "GetImplementation",
    "group": "Implementation",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
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
            "field": "id",
            "description": "<p>Implementation unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Implementation",
            "optional": false,
            "field": "implementation",
            "description": "<p>Implementation object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n   \"implementationId\":10,\n   \"author\":{\n      \"emailAddress\":\"a@gmail.com\",\n      \"securityQuestion\":\"MAIDEN_NAME\",\n      \"securityAnswer\":\"Julia\",\n      \"userLevel\":\"PUBLISHING_USER\",\n      \"password\":\"dfjask;fj\",\n      \"subscribed\":[\n\n      ]\n   },\n   \"name\":\"handler_10\",\n   \"scope\":{\n      \"impScope\":\"SHARED\"\n   },\n   \"messageType\":{\n      \"implementationId\":3,\n      \"author\":{\n         \"emailAddress\":\"a@gmail.com\",\n         \"securityQuestion\":\"MAIDEN_NAME\",\n         \"securityAnswer\":\"Julia\",\n         \"userLevel\":\"PUBLISHING_USER\",\n         \"password\":\"dfjask;fj\",\n         \"subscribed\":[\n\n         ]\n      },\n      \"name\":\"messageType_3\",\n      \"scope\":{\n         \"impScope\":\"SHARED\"\n      }\n   },\n   \"generics\":[\n      {\n         \"implementationId\":3,\n         \"author\":{\n            \"emailAddress\":\"a@gmail.com\",\n            \"securityQuestion\":\"MAIDEN_NAME\",\n            \"securityAnswer\":\"Julia\",\n            \"userLevel\":\"PUBLISHING_USER\",\n            \"password\":\"dfjask;fj\",\n            \"subscribed\":[\n\n            ]\n         },\n         \"name\":\"messageType_3\",\n         \"scope\":{\n            \"impScope\":\"SHARED\"\n         }\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ImpController.java",
    "groupTitle": "Implementation"
  },
  {
    "type": "get",
    "url": "/imp/user/:id",
    "title": "Get Implementations by user",
    "name": "GetImplementationByUser",
    "group": "Implementation",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
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
            "field": "id",
            "description": "<p>Implementation unique ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ImpController.java",
    "groupTitle": "Implementation"
  },
  {
    "type": "get",
    "url": "/imp/template/:id",
    "title": "Get Template from existing Implementation",
    "name": "GetTemplateImplementation",
    "group": "Implementation",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
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
            "field": "id",
            "description": "<p>Implementation unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Implementation",
            "optional": false,
            "field": "implementation",
            "description": "<p>Implementation object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ImpController.java",
    "groupTitle": "Implementation"
  },
  {
    "type": "post",
    "url": "/imp",
    "title": "Post Implementation",
    "name": "PostImplementation",
    "group": "Implementation",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Implementation",
            "optional": false,
            "field": "implementation",
            "description": "<p>Implementation object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"implementationId\":10,\n   \"author\":{\n      \"emailAddress\":\"a@gmail.com\",\n      \"securityQuestion\":\"MAIDEN_NAME\",\n      \"securityAnswer\":\"Julia\",\n      \"userLevel\":\"PUBLISHING_USER\",\n      \"password\":\"dfjask;fj\",\n      \"subscribed\":[\n\n      ]\n   },\n   \"name\":\"handler_10\",\n   \"scope\":{\n      \"impScope\":\"SHARED\"\n   },\n   \"messageType\":{\n      \"implementationId\":3,\n      \"author\":{\n         \"emailAddress\":\"a@gmail.com\",\n         \"securityQuestion\":\"MAIDEN_NAME\",\n         \"securityAnswer\":\"Julia\",\n         \"userLevel\":\"PUBLISHING_USER\",\n         \"password\":\"dfjask;fj\",\n         \"subscribed\":[\n\n         ]\n      },\n      \"name\":\"messageType_3\",\n      \"scope\":{\n         \"impScope\":\"SHARED\"\n      }\n   },\n   \"generics\":[\n      {\n         \"implementationId\":3,\n         \"author\":{\n            \"emailAddress\":\"a@gmail.com\",\n            \"securityQuestion\":\"MAIDEN_NAME\",\n            \"securityAnswer\":\"Julia\",\n            \"userLevel\":\"PUBLISHING_USER\",\n            \"password\":\"dfjask;fj\",\n            \"subscribed\":[\n\n            ]\n         },\n         \"name\":\"messageType_3\",\n         \"scope\":{\n            \"impScope\":\"SHARED\"\n         }\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Implementation unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n\"id\":\"1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n\"error\": \"Access denied for non publishing user\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ImpController.java",
    "groupTitle": "Implementation"
  },
  {
    "type": "put",
    "url": "/imp",
    "title": "Put Implementation",
    "name": "PostImplementation",
    "group": "Implementation",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./ImpController.java",
    "groupTitle": "Implementation"
  },
  {
    "type": "delete",
    "url": "/imp/:id/user",
    "title": "Remove User from Implementation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Implementation unique ID</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User object</p>"
          }
        ]
      }
    },
    "name": "RemoveUserFromImplementation",
    "group": "Implementation",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "filename": "./ImpController.java",
    "groupTitle": "Implementation"
  },
  {
    "type": "get",
    "url": "/imp/default",
    "title": "GetDefaultImplementation for ImplementationType",
    "name": "getDefaultImplementation",
    "group": "Implementation",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ImpType",
            "optional": false,
            "field": "impType",
            "description": "<p>The implementation type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RequestExample:",
          "content": "{\n\"impType\":\"Handler\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Implementation",
            "optional": false,
            "field": "implementation",
            "description": "<p>Implementation object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ImpController.java",
    "groupTitle": "Implementation"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./UserManagementController.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/security_question",
    "title": "Get security question",
    "name": "GetSecurityQuestion",
    "group": "User",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "securityQuestion",
            "description": "<p>Security question to reset the password</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n\"error\": \"Unauthorized please login to your account\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./UserManagementController.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get User information",
    "name": "GetUser",
    "group": "User",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n\"user\":{\n\"email\":\"test@web.de\",\n\"password\":\"$2a$10$EblZqNptyYvcLm/VwDCVAuBjzZOI7khzdyGPBr08PpIi0na624b8\",\n\"securityQuestion\":\"petName\",\n\"securityAnswer\":\"Jim\"\n\"userLevel\":\"BasicUser\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./UserManagementController.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/levels",
    "title": "Get user levels",
    "name": "GetUserLevels",
    "group": "User",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n\"error\": \"Access denied for non admin user\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"userLevels\":[\n \"BasicUser\",\n \"PublishingUser\",\n \"Administrator\"\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./UserManagementController.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/login",
    "title": "Login for a registered User",
    "name": "Login",
    "group": "User",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Token to authenticate future requests</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User mail</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"email\": \"test@web.de\",\n\"password\": \"12345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./UserManagementController.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Register a new User",
    "name": "Register",
    "group": "User",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Returns whether a request was successful</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User mail</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"email\": \"test@web.de\",\n\"password\": \"12345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./UserManagementController.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reset_password",
    "title": "Resets the password after security question was answered",
    "name": "ResetPasswordQuestion",
    "group": "User",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Answer to the security question</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"answer\": \"Jim\",\n\"newPassword\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n\"error\": \"Unauthorized please login to your account\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./UserManagementController.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/security_question",
    "title": "Set a new password",
    "name": "SetPasswordQuestion",
    "group": "User",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Old password</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"oldPassword\": \"12345678\",\n\"newPassword\": \"password\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n\"error\": \"Unauthorized please login to your account\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./UserManagementController.java",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/level",
    "title": "Set user level",
    "name": "SetUserLevel",
    "group": "User",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization header using the Bearer schema: Bearer token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Errormessage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n\"error\": \"Access denied for non admin user\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./UserManagementController.java",
    "groupTitle": "User"
  }
] });
