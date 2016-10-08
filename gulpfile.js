var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //mix.sass('app.scss');
    mix.styles(['bootstrap.min.css','index.css'],'public/css/master.css',null);
    mix.scripts(['jquery.min.js','angular.min.js','ngroute.js','app.js','controller/dashboard_0.js','controller/dashboard_1.js','controller/dashboard_2.js','bootstrap.min.js'],'public/js/master.js',null);
    //mix.scripts('js/bootstrap.min.js','js/angular.min.js');
    //mix.scripts('js/bootstrap.min.js');
});