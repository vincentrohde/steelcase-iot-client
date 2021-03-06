## iot_app

React application to display and instruct chair(robot) movement. Making use of camera data and a pathfinding algorithm.

![iot_app](https://user-images.githubusercontent.com/25182140/53328197-be22d500-38e9-11e9-8c9d-f7ff747f5f8c.png)

## Table of Contents

1. <a href="#getting-started">Getting Started</a>
2. <a href="#built-with">Built With</a>
3. <a href="#authors">Authors</a>

## Getting Started

### Prerequisites

To run/use this application, you need to have **Node.js** and its package manager **npm** installed on your local environment.


### Installing

#### Server Repository

We use this repository for our mock servers:
https://github.com/vincentrohde/iot_app_server

Clone the repository

`git clone https://github.com/vincentrohde/iot_app_server.git`

Open the repository

`cd iot_app_server`

Install the dependencies

`npm install`

Start the State Server

`node app.js`

Generate Mock Camera Data

`node mocks/chair-server.js`


#### App

Clone the repository

`git clone https://github.com/vincentrohde/iot_app.git`

Open the repository

`cd iot_app_server`

Install the dependencies

`npm install`

Start the development server

`npm start`

Now you can run the app in the browser, using this URL:

http://localhost:3000

#### If you want to use a custom Websocket Server to send data to, you are required to update the Order Component's Order.js file.

Changing the server address (src/components/Sideboard/Orders/Order/Order.js):

`let feServer = new WebSocket("ws://{{ ip:port }}");`

Updating the schema (src/components/Sideboard/Orders/Order/Order.js):

```
function sendMessage(name) {
    console.log(name);
    if (name === "discussion") {
        feServer.send(JSON.stringify({{ your schema }}));
    } else if (name === "lane_vertical") {
        feServer.send(JSON.stringify({{ your schema }}));
    } else if(name === "lane_horizontal"){
        feServer.send(JSON.stringify({{ your schema }}));
    }
}
```

## Built With

- [React](https://reactjs.org/) - The Single Page Application library
- [Sass](https://github.com/sass/node-sass) - The CSS preprocessor
- [React Router v4](https://github.com/ReactTraining/react-router) - The router
- [React Waterfall](https://github.com/didierfranc/react-waterfall) - The state manager
- [Axios](https://github.com/axios/axios) - The http client
- [create-react-app](https://github.com/facebook/create-react-app) - The boilerplate for our project


## Authors

- [Momaritti](https://github.com/Momaritti) - Marie-Theres Monz
- [nastasios](https://github.com/nastasios) - Nastasios Gianoulis
- [vincentrohde](https://github.com/vincentrohde) - Vincent Rohde

<a href="#iot_app">Back To Top</a>
