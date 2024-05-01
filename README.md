# vue3-board

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

############# install

## npm create vue@latest

## npm i -D prettier

############### extension

# vuetify-vscode

# Prettier - Code formatter

    https://prettier.io/docs/en/configuration.html


    .prettierrc.js

            module.exports = {
            semi: false,
            singleQuote: true,
            trailingComma: "all",
            };

# settings.json

    {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true
    }

##### vuetify

    npm i -D vuetify vite-plugin-vuetify
    npm i @mdi/font

######## npm i vee-validate --save

# vue3-board

# npm i axios

#### Ex. domain api

    method  : post,     get,    put,    delete
    db      : insert,   select, update, delete
    url
    [POST]      insert  : /api/vi/domain
    [GET]       select  : /api/vi/domain
    [GET]       detail  : /api/vi/domain/{id}
    [PUT]       update  : /api/vi/domain/{id}
    [DELETE]    delete  : /api/vi/domain/{id}

#### Ex. domain(board) api

    method  : post,     get,    put,    delete
    db      : insert,   select, update, delete
    url
    [POST]      insert  : /api/vi/board
    [GET]       select  : /api/vi/board
    [GET]       detail  : /api/vi/board/{id}
    [PUT]       update  : /api/vi/board/{id}
    [DELETE]    delete  : /api/vi/board/{id}



#### npm install axios-http-wrapper


#### npm install bootstrap jquery popper.js



### docker desktop
    https://www.docker.com/get-started/



### docker -v
    C:\Users\sangb>docker -v
        Docker version 25.0.3, build 4debf41


    C:\Users\sangb>docker run --name PostgreSQL -e POSTGRES_USER=user1234 -e POSTGRES_PASSWORD=user1234 -d -p 5432:5432 postgres
    Unable to find image 'postgres:latest' locally
    latest: Pulling from library/postgres
    8a1e25ce7c4f: Downloading [===================================>               ]  20.53MB/29.12MB
    002317ed8722: Download complete
    c223965bd9a8: Download complete
    847682431a68: Download complete
    8d29ba654727: Download complete
    fd133663e42b: Download complete
    13de11c6ecda: Download complete
    45bb35744214: Download complete
    d4082e63ce2c: Downloading [====>                                              ]  10.19MB/109MB
    269f33c511c1: Download complete
    7cbaf3c85093: Download complete
    f1c82efa0dcd: Waiting
    e9d0d3c40657: Waiting
    68bf5c580643: Waiting



    C:\Users\sangb>docker ps  -a
    CONTAINER ID   IMAGE      COMMAND                   CREATED         STATUS         PORTS                    NAMES
    d11f41063f71   postgres   "docker-entrypoint.s…"   7 minutes ago   Up 7 minutes   0.0.0.0:5432->5432/tcp   PostgreSQL




#### create database smartscore;
#### org.bgee.log4jdbc-log4j2


#### yarn add -D sass
#### Could not resolve "@popperjs/core"
#### npm install @popperjs/core@latest


# docker run -d -p 1521:1521 oracleinanutshell/oracle-xe-11g


    C:\Users\sangb>docker run -d -p 1521:1521 oracleinanutshell/oracle-xe-11g
    Unable to find image 'oracleinanutshell/oracle-xe-11g:latest' locally
    latest: Pulling from oracleinanutshell/oracle-xe-11g
    6cf436f81810: Pull complete
    987088a85b96: Pull complete
    b4624b3efe06: Pull complete
    d42beb8ded59: Pull complete
    15522cc0fb47: Pull complete
    f747bf1d551d: Pull complete
    Digest: sha256:8b740e77d4b90add693fedb22938f340821e89665fb58ecaeeb0dace853b9ee5
    Status: Downloaded newer image for oracleinanutshell/oracle-xe-11g:latest
    96a7770f91e35b71ca6b98bf418db342179e8d28eeed6a428e14cf90e49be6c7

#####    접속 정보
        system/oracle

        CREATE USER user1234 IDENTIFIED BY user1234;

        CREATE USER user1234 IDENTIFIED BY user1234;
        CREATE USER user1234 IDENTIFIED BY user1234 DEFAULT TABLESPACE USERS TEMPORARY TABLESPACE TEMP;
        GRANT CONNECT, RESOURCE TO user1234;        
        grant connect,resource,dba to user1234;




##### npm i sweetalert2


#### api call proxy 설정
    vite.config.ts

      '/v1/dir': 'http://localhost:8080',



#### npm install --global yarn


### 
### 
### 
### 
### 
### 




### npm install -S yup




### [post] api/auth/signup (email, password)  - database - response : registerd info
### [post] api/auth/signup (email, password)  - database - response : registerd info
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### npm install vuex@next --save
### npm i @fortawesome/vue-fontawesome
### npm i @fortawesome/fontawesome-svg-core
### npm i @fortawesome/free-solid-svg-icons
### npm i vue-fontawesomeicons
 