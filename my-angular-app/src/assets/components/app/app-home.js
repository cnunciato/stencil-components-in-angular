/*! Built with http://stenciljs.com */

App.loadStyles("app-home","app-home div {\n  padding: 10px;\n}\n\napp-home button {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  outline: 0;\n  letter-spacing: .04em;\n  transition: all .15s ease;\n  cursor: pointer;\n}\n\napp-home button:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  transform: translateY(1px);\n}\napp-home.hydrated{visibility:inherit}","my-app","my-app header {\n  background: #5851ff;\n  color: white;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\nmy-app h1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: #fff;\n  padding: 0 12px;\n}\nmy-app.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"app-home",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class AppHome {
    render() {
        return (h("div", null,
            h("p", null,
                "Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ",
                h("a", { href: 'https://stenciljs.com' }, "stenciljs.com"),
                " to get started."),
            h("stencil-route-link", { url: '/profile/stencil' },
                h("button", null, "Profile page"))));
    }
}

class MyApp {
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "Stencil App Starter")),
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route", { url: '/', component: 'app-home', exact: true }),
                    h("stencil-route", { url: '/profile/:name', component: 'app-profile' })))));
    }
}

exports['app-home'] = AppHome;
exports['my-app'] = MyApp;
},


/***************** app-home *****************/
[
/** app-home: tag **/
"app-home",

/** app-home: members **/
0 /* no members */,

/** app-home: host **/
{}

],

/***************** my-app *****************/
[
/** my-app: tag **/
"my-app",

/** my-app: members **/
0 /* no members */,

/** my-app: host **/
{}

]
);