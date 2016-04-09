



angular.module('myapp')

.controller('ArticleController', ['$scope', 'ArticleService', '$stateParams', function ($scope, ArticleService, $stateParams) {
	var id = $stateParams.articleId

	ArticleService.find(id).then(function (article) {
		$scope.article = article
	})
}])
