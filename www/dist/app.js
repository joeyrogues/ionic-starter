



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




angular.module('myapp')

.controller('ApplicationController', [function () {
	
}])




angular.module('myapp')

.controller('ArticleController', ['$scope', 'ArticleService', '$stateParams', function ($scope, ArticleService, $stateParams) {
	var id = $stateParams.articleId

	ArticleService.find(id).then(function (article) {
		$scope.article = article
	})
}])





angular.module('myapp')

.controller('ArticlesController', ['$scope', 'ArticleService', function($scope, ArticleService) {
    ArticleService.all().then(function (articles) {
    	$scope.articles = articles
    })
}])





angular.module('myapp')

.controller('ChosesController', ['$scope', function($scope) {
    $scope.choses = [
        { id: 1, firstAttribute: 'Chose 1', secondAttribute: 'La super chose 1' }
      , { id: 2, firstAttribute: 'Chose 2', secondAttribute: 'La super chose 2' }
      , { id: 3, firstAttribute: 'Chose 3', secondAttribute: 'La super chose 3' }
      , { id: 4, firstAttribute: 'Chose 4', secondAttribute: 'La super chose 4' }
      , { id: 5, firstAttribute: 'Chose 5', secondAttribute: 'La super chose 5' }
      , { id: 6, firstAttribute: 'Chose 6', secondAttribute: 'La super chose 6' }
    ]
}])





angular.module('myapp')

.factory('ArticleService', ['$q', function ($q) {
	var ArticleService = {
		all: function () {
			return $q.when([
		        { id: 1, title: 'Article 1', description: 'The super article 1' }
		      , { id: 2, title: 'Article 2', description: 'The super article 2' }
		      , { id: 3, title: 'Article 3', description: 'The super article 3' }
		      , { id: 4, title: 'Article 4', description: 'The super article 4' }
		      , { id: 5, title: 'Article 5', description: 'The super article 5' }
		      , { id: 6, title: 'Article 6', description: 'The super article 6' }
		    ])
		},

		find: function (id) {
			var article = { id: id, title: 'Article ' + id, description: 'The super article ' + id }
			return $q.when(article)
		}
	}

	return ArticleService
}])
