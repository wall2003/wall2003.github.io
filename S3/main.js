(function(){
    'use strict';

    document.write('<link href="http://wrio.s3-website-us-east-1.amazonaws.com/css/bootstrap.min.css" rel="stylesheet">');
    document.write('<link rel="stylesheet" href="http://wrio.s3-website-us-east-1.amazonaws.com/css/webrunes.css">');
    document.write('<link rel="shortcut icon" href="http://wrio.s3-website-us-east-1.amazonaws.com/ico/favicon.ico">');

    document.write('<link rel="import" href="http://wrio.s3-website-us-east-1.amazonaws.com/jquery.html">');
    document.write('<link rel="import" href="http://wrio.s3-website-us-east-1.amazonaws.com/widgets/list-widget.html">');

    var imp = document.createElement('link');
    imp.rel = 'import';
    imp.href = 'http://wrio.s3-website-us-east-1.amazonaws.com/bootstrap.html';
    imp.id = 'webrunes_root_332D319E-4D7A-43AE-8101-3D39FB2B811D'
    imp.onload = function(e) {
        var link = document.querySelector('link[id="webrunes_root_332D319E-4D7A-43AE-8101-3D39FB2B811D"]');
        var template = link.import.querySelector('template');
        var clone = document.importNode(template.content, true);
        document.querySelector('body').appendChild(clone);
    };
    document.head.appendChild(imp);
})();
