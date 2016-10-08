<html ng-app="dsb">
<head>
    <title>Corporate Dashboard</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/master.css" type="text/css">
</head>
<body ng-controller="master" ng-cloak>
    <div class="container">
       <header>
            <nav class="navbar navbar-default planner-block">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Corporate Dashboard</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div class="jumbotron">
            <h1>Welcome to your dashboard!</h1>
            <hr>
            <b>Navigate To: </b><br><br>
            <p>
                <a class="btn btn-primary btn-lg" href="#gview" role="button">Geospatial View</a>
                <a class="btn btn-primary btn-lg" href="#kmview" role="button">Key Metrics View</a>
                <a class="btn btn-primary btn-lg" href="#dview" role="button">Data View</a>
            </p>
        </div>
        <div class="col-md-12 col-centered container">
            <div ng-view></div>
        </div>
    </div>
<script src="js/master.js"></script>
</body>
</html>