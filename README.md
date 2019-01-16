## iot_app

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
into their own subdirectory.

Take a look at this example:

```
src
|   components
|   |    Header
|   |    |  Header.js
|   |    |  Header.scss
```

Each component directory should come with its 
own SCSS file.

**Stateless Components**

When creating components, try to use a 
<a href="https://programmingwithmosh.com/react/react-functional-components/">stateless component</a> whenever possible.

**Naming Components**

Everything related to components should be named in <a href="http://wiki.c2.com/?PascalCase">Pascal Case</a>.

### Getting Started

1. `npm install`
2. `npm start`

### Resources

#### Dependencies

The project uses the following dependencies:

**<a href="https://github.com/ReactTraining/react-router">React Router</a>**

<a href="#iot_app">Back To Top</a>