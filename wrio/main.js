(function(){
    'use strict';

    var imp = document.createElement('link ');
    imp.rel = 'import';
    imp.href = 'http://wrio.s3-website-us-east-1.amazonaws.com/bootstrap.html';
    imp.onload = function(e) {
        var link = document.querySelector('link[rel="import"]');

        // Clone the <template> in the import.
        var template = link.import.querySelector('template');
        var clone = document.importNode(template.content, true);

        document.querySelector('body').appendChild(clone);
    };
//    imp.setAttribute('rel', 'import');
//    imp.setAttribute('href', 'http://wrio.s3-website-us-east-1.amazonaws.com/bootstrap.html');
    document.head.appendChild(imp);
})();
