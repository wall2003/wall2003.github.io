<script id='root-container.html' type='text/ng-template'>
    <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-3 col-md-2" data-ng-controller="leftCtrl">
            <div class="navbar-header" navbar-header></div>
            <div class="navbar-collapse in" navbar-collapse></div>
        </div>
        <div class="content col-xs-12 col-sm-5 col-md-7" data-ng-controller="centerCtrl">
            <h4 data-ng-bind="menu"></h4>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 sidebar-offcanvas" id="sidebar" data-ng-controller="rightCtrl">
            <h4 data-ng-bind="menu"></h4>
        </div>
    </div>
</script>
