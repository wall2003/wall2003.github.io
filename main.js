(function(){
    var head = document.getElementsByTagName('head')[0];
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

    //prepare angular root element ------------------------------
    var html = document.documentElement;
    html.setAttribute('data-ng-app', 'app');
    html.setAttribute('data-ng-controller', 'appCtrl');

    //prepare root container ------------------------------------------
    var body = document.getElementsByTagName('body')[0];
    var cont = document.createElement('div');
    cont.className = 'container-liquid';
    body.appendChild(cont);

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
    frame.setAttribute('src', 'http://s3.amazonaws.com/webrunes-bucket/plus.html');
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

    //body - scripts ----------------------------------------------------
    var script = document.createElement('script');
    script.setAttribute('src', 'http://wall2003.github.io/Themes/' + theme +'/app.js');
    body.appendChild(script);

    script = document.createElement('script');
    script.Text = '$(document).ready(function() {window.WMW = $("#content-linked-data").html();});';
    body.appendChild(script);
})();