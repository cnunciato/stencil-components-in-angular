/*! Built with http://stenciljs.com */

App.loadStyles("app-profile","app-profile div {\n  padding: 10px;\n}\napp-profile.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"app-profile",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class AppProfile {
    componentDidUpdate() {
        console.log('The component did update');
    }
    componentWillLoad() {
        console.log('The component is about to be rendered');
    }
    componentDidLoad() {
        console.log('The component has been rendered');
    }
    render() {
        if (this.match && this.match.params.name) {
            return (h("div", null,
                h("p", null,
                    "Hello! My name is ",
                    this.match.params.name,
                    ". My name was passed in through a route param!")));
        }
        else {
            return (h("div", null,
                h("p", null,
                    "Hello! My name is ",
                    this.name,
                    ". The current time is ",
                    this.currentTime,
                    ".")));
        }
    }
}

exports['app-profile'] = AppProfile;
},


/***************** app-profile *****************/
[
/** app-profile: tag **/
"app-profile",

/** app-profile: members **/
[
  [ "currentTime", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "match", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** app-profile: host **/
{}

]
);