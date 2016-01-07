angular.module('services', []);
angular.module('controllers', []);
angular.module('directives', []);
angular.module('filters', []);

// Initialize the main application module
var app = angular.module('app', ['ui.bootstrap', 'ngAnimate', 'services', 'controllers', 'directives', 'filters']);