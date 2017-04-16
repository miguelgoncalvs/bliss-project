app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/health', {
        templateUrl: 'partials/health.html',
        controller: 'MainController'
      }).
      when('/questions', {
        templateUrl: 'partials/questions.html',
        controller: 'QuestionsController'
      }).
      when('/questions/:id', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
      }).
      when('/share', {
        templateUrl: 'partials/share.html',
        controller: 'ShareController'
      }).
      when('/share/:id', {
        templateUrl: 'partials/share.html',
        controller: 'ShareController'
      }).
      otherwise({
        redirectTo: '/health'
      });
  }
]);