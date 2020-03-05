# ReadMe

# Folder structure
```
    App
    ├── Dockerfile
    ├── README.mb
    ├── __tests__
    │   └── index.test.js
    ├── config.js
    ├── docker-compose.yml
    ├── index.js
    ├── jest-config.js
    ├── package-lock.json
    ├── package.json
    └── server.js
```
  - ### Running Locally
    - ###### Requirements
        - Node
        - npm
        - mongodb
    - ###### Run Command the followying commands
        - `npm install`  
        - `npm run start`
    - ###### API call's
        - API call with name 
            [localhost:8080/hello?name=James](http://localhost:8080/hello?name=James)
        - API call with out stranger
            [localhost:8080/hello](http://localhost:8080/hello)
  - ### Runnning Test locally
      - ###### Requirements
        - Node
        - npm
        - mongodb
    - ###### Run Command the followying commands
        - `npm install`  
        - `npm test`
            -   we have 4 test
                - 2 will pass
                - 2 will fail

  - ### Running Dockerize app
    - ###### Requirements
        - Docker
    - ###### Runnning the application
        - docker-compose up -d (to run in background)
        - docker-compose up
    - ###### API call's
        - API call with name 
            [localhost/hello?name=James](http://localhost/hello?name=James)
        - API call with out stranger
            [localhost/hello](http://localhost/hello)
