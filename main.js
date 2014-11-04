(function(){
    //prepare angular root element
    var html = document.documentElement;
    html.setAttribute('data-ng-app', 'app');
    html.setAttribute('data-ng-controller', 'appCtrl');

    //default theme
    var theme = 'Default';



    //add to head
    var head = document.getElementsByTagName('head')[0];
    var meta = document.createElement('link');
    meta.setAttribute('href', 'http://wall2003.github.io/Themes/'  + theme + '/css/bootstrap.min.css');
    meta.setAttribute('rel', 'stylesheet');
    head.appendChild(meta);

    meta = document.createElement('link');
    meta.setAttribute('href', 'http://wall2003.github.io/Themes/'  + theme + '/css/webrunes.css');
    meta.setAttribute('rel', 'stylesheet');
    head.appendChild(meta);

    meta = document.createElement('link');
    meta.setAttribute('href', 'http://wall2003.github.io/Themes/'  + theme + '/ico/favicon.ico');
    meta.setAttribute('rel', 'shortcut icon');
    head.appendChild(meta);

    meta = document.createElement('link');
    meta.setAttribute('rel', 'apple-touch-icon-precomposed');
    meta.setAttribute('sizes', '144x144');
    meta.setAttribute('href', 'http://wall2003.github.io/Themes/'  + theme + '/ico/apple-touch-icon-144-precomposed.png');
    head.appendChild(meta);

    meta = document.createElement('link');
    meta.setAttribute('rel', 'apple-touch-icon-precomposed');
    meta.setAttribute('sizes', '114x114');
    meta.setAttribute('href', 'http://wall2003.github.io/Themes/'  + theme + '/ico/apple-touch-icon-114-precomposed.png');
    head.appendChild(meta);

    meta = document.createElement('link');
    meta.setAttribute('rel', 'apple-touch-icon-precomposed');
    meta.setAttribute('sizes', '72x72');
    meta.setAttribute('href', 'http://wall2003.github.io/Themes/'  + theme + '/ico/apple-touch-icon-72-precomposed.png');
    head.appendChild(meta);

    meta = document.createElement('link');
    meta.setAttribute('rel', 'apple-touch-icon-precomposed');
    meta.setAttribute('href', 'http://wall2003.github.io/Themes/'  + theme + '/ico/apple-touch-icon-57-precomposed.png');
    head.appendChild(meta);

    //load scripts
    var script = document.createElement('script');
    script.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js');
    head.appendChild(script);

    script = document.createElement('script');
    script.setAttribute('src', '//ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular.min.js');
    head.appendChild(script);


    //prepare container
    document.write("<script src='http://wall2003.github.io/prepare.container.js'></script>");
})();