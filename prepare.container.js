//(function($){
//    $(document).ready(function(){
//        var WMW = $("#content-linked-data").html();
//
//        var container = $('<div class="container-liquid"></div>');
//        $('body').append(container);
//        var container_child = $('<div class="row row-offcanvas row-offcanvas-right"></div>');
//        container.append(container_child);
//        var div_left = $('<div class="col-xs-12 col-sm-3 col-md-2"></div>');
//        var navbar = $('<div class="navbar navbar-inverse main navbar-fixed-top row-offcanvas-menu"></div>');
//        var plus_widget = $('<iframe src="http://s3.amazonaws.com/webrunes-bucket/1WJyH1k7-list.html" width="100%" height="99%" allowTransparency="" scrolling="no" frameborder="0"></iframe>');
//        div_left.append(navbar);
//        div_left.append(plus_widget);
//        container_child.append(div_left);
//        var div_center = $('<div class="content col-xs-12 col-sm-5 col-md-7"></div>');
//        container_child.append(div_center);
//        var div_right = $('<div id="sidebar" class="col-xs-6 col-sm-4 col-md-3 sidebar-offcanvas"></div>');
//        container_child.append(div_right);
//
//    });
//})(jQuery);

document.addEventListener("DOMContentLoaded", function(event) {
    $(document).ready(function(){
        var WMW = $("#content-linked-data").html();

        var container = $('<div class="container-liquid"></div>');
        $('body').append(container);
        var container_child = $('<div class="row row-offcanvas row-offcanvas-right"></div>');
        container.append(container_child);
        var div_left = $('<div class="col-xs-12 col-sm-3 col-md-2"></div>');
        var navbar = $('<div class="navbar navbar-inverse main navbar-fixed-top row-offcanvas-menu"></div>');
        var plus_widget = $('<iframe src="http://s3.amazonaws.com/webrunes-bucket/1WJyH1k7-list.html" width="100%" height="99%" allowTransparency="" scrolling="no" frameborder="0"></iframe>');
        div_left.append(navbar);
        div_left.append(plus_widget);
        container_child.append(div_left);
        var div_center = $('<div class="content col-xs-12 col-sm-5 col-md-7"></div>');
        container_child.append(div_center);
        var div_right = $('<div id="sidebar" class="col-xs-6 col-sm-4 col-md-3 sidebar-offcanvas"></div>');
        container_child.append(div_right);

    });
});

