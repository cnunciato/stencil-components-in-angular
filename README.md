# Using Stencil with Angular

This is a super-simple example of integrating [Stencil components](https://stenciljs.com/) into an Angular application. It consists of two web applications -- the Stencil container app (where the components are defined, and which could double as a UI for the component library) and the Angular app that consumes them.

For now, this works best in two Terminal tabs. In one:

```
cd my-component-library
npm install
npm start
```

and in the other:

```
cd my-angular-app
npm install
npm start
```

Browse to http://localhost:4200 to see the embedded component and its updating content. These two apps were generated from [the Stencil repository](https://github.com/ionic-team/stencil) and [Angular CLI](https://cli.angular.io/), respectively.
