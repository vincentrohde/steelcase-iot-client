## iot_app

Please commit to development branch.

React App for the iot project.

1. <a href="#guidelines">Guidelines</a>
2. <a href="#getting-started">Getting Started</a>
3. <a href="#resources">Resources</a>

### Guidelines

Please take a look at these documents before starting right away.

+ SCSS: <a href="https://github.com/nikita-kit/nikita-css">nikita-css</a>
+ JS/ ES6: <a href="https://github.com/nikita-kit/nikita-js">nikita-js</a>

#### React

##### Components

Components belong into the `src/components` directory and should be placed 
into their own subdirectory. Each component should come with its 
own SCSS file.

```
src
|   components
|   |    Header
|   |    |  Header.js
|   |    |  Header.scss
```

**Presentational and Container Components**

Components should be split into Presentational(dumb, templates) and Container
(smart) 
components.

<a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">Difference Explained</a>

<a href="https://gist.github.com/chantastic/fc9e3853464dffdb1e3c">Example</a>

**Stateless Components**

When creating components, try to use a 
<a href="https://programmingwithmosh.com/react/react-functional-components/">stateless component</a> whenever possible.

**Naming Components**

Everything related to components should be named in <a href="http://wiki.c2.com/?PascalCase">Pascal Case</a>.

### Getting Started

Clone the <a href="https://github.com/vincentrohde/iot_app_server">Server 
Repository</a> and install the dependencies. Run the `app.js` to start the 
general state server. To get mock camera 
input, you will have to run the `mock/chair-server.js`.

Now you can run the React App:

1. `npm install`
2. `npm start`

### Resources

#### Dependencies

The project uses the following dependencies:

**<a href="https://github.com/ReactTraining/react-router">React Router</a>**

**<a href="https://github.com/didierfranc/react-waterfall">React Waterfall</a>**

<a href="#iot_app">Back To Top</a>