



angular.module('myapp', [
  'ionic'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'ApplicationController'
    })

    .state('app.articles', {
      url: '/articles',
      views: {
        menuContent: {
          templateUrl: 'templates/articles.html',
          controller: 'ArticlesController'
        }
      }
    })

    .state('app.article', {
      url: '/articles/{articleId}',
      views: {
        menuContent: {
          templateUrl: 'templates/article.html',
          controller: 'ArticleController'
        }
      }
    })

    .state('app.choses', {
      url: '/choses',
      views: {
        menuContent: {
          templateUrl: 'templates/choses.html',
          controller: 'ChosesController'
        }
      }
    })

  $urlRouterProvider.otherwise('/app/articles')
})

.run(function($ionicPlatform) {

})