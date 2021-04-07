# spring-boot-vue-js

[![Build Status](https://github.com/Dj003088007/sb-vj/workflows/build/badge.svg)](https://github.com/Dj003088007/sb-vj/actions)
[![versionspringboot](https://img.shields.io/badge/dynamic/xml?color=brightgreen&url=https://raw.githubusercontent.com/Dj003088007/sb-vj/master/pom.xml&query=%2F%2A%5Blocal-name%28%29%3D%27project%27%5D%2F%2A%5Blocal-name%28%29%3D%27parent%27%5D%2F%2A%5Blocal-name%28%29%3D%27version%27%5D&label=springboot)](https://github.com/spring-projects/spring-boot)
[![versionvuejs](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/Dj003088007/sb-vj/master/frontend/package.json&query=$.dependencies.vue&label=vue&logo=vue.js)](https://vuejs.org/)
[![versionjava](https://img.shields.io/badge/jdk-11-brightgreen.svg?logo=java)](https://github.com/spring-projects/spring-boot)
[![versionnodejs](https://img.shields.io/badge/dynamic/xml?color=brightgreen&url=https://raw.githubusercontent.com/Dj003088007/sb-vj/master/frontend/pom.xml&query=%2F%2A%5Blocal-name%28%29%3D%27project%27%5D%2F%2A%5Blocal-name%28%29%3D%27build%27%5D%2F%2A%5Blocal-name%28%29%3D%27plugins%27%5D%2F%2A%5Blocal-name%28%29%3D%27plugin%27%5D%2F%2A%5Blocal-name%28%29%3D%27executions%27%5D%2F%2A%5Blocal-name%28%29%3D%27execution%27%5D%2F%2A%5Blocal-name%28%29%3D%27configuration%27%5D%2F%2A%5Blocal-name%28%29%3D%27nodeVersion%27%5D&label=nodejs&logo=node.js)](https://nodejs.org/en/)
[![versionaxios](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/Dj003088007/sb-vj/master/frontend/package.json&query=$.dependencies.axios&label=axios)](https://github.com/axios/axios)

## Table of Contents

- [Name of Project is JDsPost](#JDsPost)
- [Setup Vue.js & Spring Boot](#setup-vuejs--spring-boot)
- [Project setup](#project-setup)
- [First App run](#first-app-run)
- [Screenshots of Project](#screenshots-of-project)

## JDsPost

```
JDsPost is a website application designed with tools
is the spring boot for the backend
and vue js for the frontend
and the database is postgreql.

This application has a feature is get articles from the database.
Another feature is adding, editing and deleting articles to the database.
```

## Setup Vue.js & Spring Boot

### Prerequisites

#### MacOSX

```
brew install node
npm install -g @vue/cli
```

#### Linux

```
sudo apt update
sudo apt install node
npm install -g @vue/cli
```

#### Windows

```
npm install -g @vue/cli
```

## Project setup

```
spring-boot-vuejs
├─┬ backend     → backend module with Spring Boot code
│ ├── src
│ └── pom.xml
├─┬ frontend    → frontend module with Vue.js code
│ ├── src
│ └── pom.xml
└── pom.xml     → Maven parent pom managing both modules
```

## Backend

Go to https://start.spring.io/ and initialize a Spring Boot app with `Web` and `Actuator`. Place the zip’s contents in the backend folder.

## Frontend

Creating our `frontend` project is done by the slightly changed (we use `--no-git` here, because our parent project is already a git repository and otherwise vue CLI 3 would initialize an new one):

```
vue create frontend --no-git
```

see https://cli.vuejs.org/guide/

## First App run

### Inside the root directory, do a:

```
mvn clean install
```

### Run our complete Spring Boot App:

```
mvn --projects backend spring-boot:run
```

### Now go to link and have a look at your first Vue.js + Spring Boot App.

```
[Go App](http://localhost:8080/)
```

## Screenshots of Project

#### Display Home

![Display-Home](https://github.com/Dj003088007/sb-vj/blob/main/screenshots/jdspost-ss01.png)

#### Display Search Result

![Display-Search-Result](https://github.com/Dj003088007/sb-vj/blob/main/screenshots/jdspost-ss02.png)

#### Display Add Article

![Display-Add-Article](https://github.com/Dj003088007/sb-vj/blob/main/screenshots/jdspost-ss03.png)

#### Display Datail Article

![Display-Detail-Article](https://github.com/Dj003088007/sb-vj/blob/main/screenshots/jdspost-ss04.png)

#### Display Datail Status

![Display-Detail-Status](https://github.com/Dj003088007/sb-vj/blob/main/screenshots/jdspost-ss05.png)

```

```
