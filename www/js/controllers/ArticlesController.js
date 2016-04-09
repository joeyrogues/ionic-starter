



angular.module('myapp')

.controller('ArticlesController', ['$scope', 'ArticleService', function($scope, ArticleService) {
    ArticleService.all().then(function (articles) {
    	$scope.articles = articles
    })
}])
