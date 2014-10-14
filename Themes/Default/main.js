//prepare angular root element
var html = document.documentElement;
html.setAttribute('data-ng-app', 'app');
html.setAttribute('data-ng-controller', 'appCtrl');
html.setAttribute('lang', 'en');

//
var head = document.getElementsByTagName('head')[0];
var meta = document.createElement('meta');
meta.setAttribute('charset', 'utf-8');
head.appendChild(meta);

meta = document.createElement('meta');
meta.setAttribute('http-equiv', 'X-UA-Compatible');
meta.setAttribute('content', 'IE=edge');
head.appendChild(meta);

meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');
meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(meta);

meta = document.createElement('meta');
meta.setAttribute('name', 'description');
meta.setAttribute('content', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.');
head.appendChild(meta);

meta = document.createElement('meta');
meta.setAttribute('name', 'keywords');
meta.setAttribute('content', 'story, cat');
head.appendChild(meta);

meta = document.createElement('meta');
meta.setAttribute('name', 'author');
meta.setAttribute('content', 'John Green');
head.appendChild(meta);


var title = document.createElement('title');
title.setAttribute('data-ng-bind', 'title');
var t = document.createTextNode('List Cats');
title.appendChild(t);
head.appendChild(title);

//add css
meta = document.createElement('link');
meta.setAttribute('href', 'http://wall2003.github.io/Themes/Default/css/bootstrap.min.css');
meta.setAttribute('rel', 'stylesheet');
head.appendChild(meta);

meta = document.createElement('link');
meta.setAttribute('href', 'http://wall2003.github.io/Themes/Default/css/webrunes.css');
meta.setAttribute('rel', 'stylesheet');
head.appendChild(meta);

meta = document.createElement('link');
meta.setAttribute('href', 'http://wall2003.github.io/Themes/Default/ico/favicon.ico');
meta.setAttribute('rel', 'shortcut icon');
head.appendChild(meta);

meta = document.createElement('link');
meta.setAttribute('rel', 'apple-touch-icon-precomposed');
meta.setAttribute('sizes', '144x144');
meta.setAttribute('href', 'http://wall2003.github.io/Themes/Default/ico/apple-touch-icon-144-precomposed.png');
head.appendChild(meta);

meta = document.createElement('link');
meta.setAttribute('rel', 'apple-touch-icon-precomposed');
meta.setAttribute('sizes', '114x114');
meta.setAttribute('href', 'http://wall2003.github.io/Themes/Default/ico/apple-touch-icon-114-precomposed.png');
head.appendChild(meta);

meta = document.createElement('link');
meta.setAttribute('rel', 'apple-touch-icon-precomposed');
meta.setAttribute('sizes', '72x72');
meta.setAttribute('href', 'http://wall2003.github.io/Themes/Default/ico/apple-touch-icon-72-precomposed.png');
head.appendChild(meta);

meta = document.createElement('link');
meta.setAttribute('rel', 'apple-touch-icon-precomposed');
meta.setAttribute('href', 'http://wall2003.github.io/Themes/Default/ico/apple-touch-icon-57-precomposed.png');
head.appendChild(meta);

//prepare root container
var body = document.getElementsByTagName('body')[0];
var cont = document.createElement('div');
cont.AddClass('container-liquid tooltip-demo');
cont.setAttribute('data-container', '');
//body.appendChild(cont);
var scripts = document.getElementsByTagName('script');
cont.insertBefore(scripts[0]);

//load scripts
document.write("<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>");
document.write("<script src='//ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular.min.js'></script>");
document.write('<script src="http://wall2003.github.io/js/bootstrap.min.js"></script>');
document.write('<script src="http://wall2003.github.io/js/offcanvas.js"></script>');
document.write('<script src="http://wall2003.github.io/js/application.js"></script>');

document.write('<script src="http://wall2003.github.io/Themes/Default/app-app.js"></script>');
document.write('<script src="http://wall2003.github.io/Themes/Default/directives/app-directives.js"></script>');
document.write('<script src="http://wall2003.github.io/Themes/Default/controllers/app-controllers.js"></script>');




