//prepare angular root element
var html = document.documentElement;
html.setAttribute('data-ng-app', 'app');
html.setAttribute('data-ng-controller', 'appCtrl');
html.setAttribute('lang', 'en');

//set meta, title
document.write('<meta charset="utf-8">');
document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
document.write('<meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.">');
document.write('<meta name="author" content="John Green">');
document.write('<meta name="keywords" content="story, cat">');
document.write('<title data-ng-bind="title">The story of the cat</title>');

//set css, scripts
document.write('<link href="http://wall2003.github.io/Themes/Default/css/bootstrap.min.css" rel="stylesheet" />');
document.write('<link href="http://wall2003.github.io/Themes/Default/css/webrunes.css" rel="stylesheet" />');
document.write('<link href="http://wall2003.github.io/Themes/Default/ico/favicon.ico" rel="shortcut icon" />');

//jQuery
//document.write("<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>");
document.write('<script src="http://wall2003.github.io/js/jquery-1.10.2.min.js"></script>');

//Angular
//document.write("<script src='//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-route.min.js'></script>");
//document.write("<script src='//ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular.min.js'></script>");
document.write('<script src="http://wall2003.github.io/js/angular.js"></script>');
