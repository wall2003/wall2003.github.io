(function(){
    //prepare angular root element
    var html = document.documentElement;
    //html.setAttribute('data-ng-app', 'app');
    //html.setAttribute('data-ng-controller', 'appCtrl');
    html.setAttribute('lang', 'en');

    //
    var head = document.getElementsByTagName('head')[0];
    var meta = document.createElement('meta');
//    meta.setAttribute('charset', 'utf-8');
//    head.appendChild(meta);
//
//    meta = document.createElement('meta');
//    meta.setAttribute('http-equiv', 'X-UA-Compatible');
//    meta.setAttribute('content', 'IE=edge');
//    head.appendChild(meta);
//
//    meta = document.createElement('meta');
//    meta.setAttribute('name', 'viewport');
//    meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
//    head.appendChild(meta);
//
//    meta = document.createElement('meta');
//    meta.setAttribute('name', 'description');
//    meta.setAttribute('content', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.');
//    head.appendChild(meta);
//
//    meta = document.createElement('meta');
//    meta.setAttribute('name', 'keywords');
//    meta.setAttribute('content', 'story, cat');
//    head.appendChild(meta);
//
//    meta = document.createElement('meta');
//    meta.setAttribute('name', 'author');
//    meta.setAttribute('content', 'John Green');
//    head.appendChild(meta);


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
    cont.className = 'container-liquid';
    body.appendChild(cont);
    var scripts = document.getElementById('root_script');
    body.insertBefore(cont, scripts[0]);

    //container - div
    var div = document.createElement('div');
    div.className = 'row row-offcanvas row-offcanvas-right';
    cont.appendChild(div);

    //container - div - div1 - cont
    var div1 = document.createElement('div');
    div1.className = 'col-xs-12 col-sm-3 col-md-2';
    div.appendChild(div1);
    cont = document.createElement('div');
    cont.className = 'navbar navbar-inverse main navbar-fixed-top row-offcanvas-menu';
    div1.appendChild(cont);
    var frame = document.createElement('iframe');
    frame.setAttribute('src', 'http://wall2003.github.io/Widgets/Menu/menu-frame.html');
    frame.setAttribute('width', '100%');
    frame.setAttribute('height', '99%');
    frame.setAttribute('allowTransparency', '');
    frame.setAttribute('scrolling', 'no');
    frame.setAttribute('frameborder', '0');
    cont.appendChild(frame);

    //container - div - div1
    div1 = document.createElement('div');
    div1.className = 'content col-xs-12 col-sm-5 col-md-7';
    div.appendChild(div1);

    //container - div - div1
    div1 = document.createElement('div');
    div1.className = 'col-xs-6 col-sm-4 col-md-3 sidebar-offcanvas';
    div1.setAttribute('id', 'sidebar');
    div.appendChild(div1);

    //load scripts
    document.write("<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>");
//    document.write("<script src='//ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular.min.js'></script>");
//    document.write('<script src="http://wall2003.github.io/js/bootstrap.min.js"></script>');
//    document.write('<script src="http://wall2003.github.io/js/offcanvas.js"></script>');
//    document.write('<script src="http://wall2003.github.io/js/application.js"></script>');

    //application
//    var skin = 'Default';
//    document.write('<script src="http://wall2003.github.io/Themes/' + skin +'/app-app.js"></script>');
//    document.write('<script src="http://wall2003.github.io/Themes/' + skin +'/templates.js"></script>');
//    document.write('<script src="http://wall2003.github.io/Themes/' + skin +'/directives/app-directives.js"></script>');
//    document.write('<script src="http://wall2003.github.io/Themes/' + skin +'/controllers/app-controllers.js"></script>');


    document.write('<script>\n$(document).ready(function() {\nwindow.WMW = $("#content-linked-data").html();\n});\n</script>');

    document.write('<script>\n$(document).ready(function() {\nalert("document ready");\n});\n</script>');







})();





