(function(){
    //prepare angular root element
    var html = document.documentElement;
    html.setAttribute('data-ng-app', 'app');
    html.setAttribute('data-ng-controller', 'appCtrl');

    //default theme
    var theme = 'Default';
    //add css
    document.write("<link src='http://wall2003.github.io/Themes/" + theme + "/css/bootstrap.min.css' rel='stylesheet'/>");
    document.write("<link src='http://wall2003.github.io/Themes/" + theme + "/css/webrunes.css' rel='stylesheet'/>");
    document.write("<link src='http://wall2003.github.io/Themes/" + theme + "/ico/favicon.ico' rel='shortcut icon'/>");
    document.write("<link src='http://wall2003.github.io/Themes/" + theme + "/ico/apple-touch-icon-144-precomposed.png' rel='apple-touch-icon-precomposed' sizes='144x144'/>");
    document.write("<link src='http://wall2003.github.io/Themes/" + theme + "/ico/apple-touch-icon-114-precomposed.png' rel='apple-touch-icon-precomposed' sizes='114x114'/>");
    document.write("<link src='http://wall2003.github.io/Themes/" + theme + "/ico/apple-touch-icon-72-precomposed.png' rel='apple-touch-icon-precomposed' sizes='72x72'/>");
    document.write("<link src='http://wall2003.github.io/Themes/" + theme + "/ico/apple-touch-icon-57-precomposed.png' rel='apple-touch-icon-precomposed'/>");
    //scripts
    document.write("<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>");
    document.write("<script src='//ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular.min.js'></script>");

    //prepare container
    //document.write("<script src='http://wall2003.github.io/prepare.container.js'></script>");

    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.setAttribute('src', 'http://wall2003.github.io/prepare.container.js');
    body.appendChild(script);
})();