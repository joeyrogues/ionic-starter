



angular.module('myapp')

.factory('ArticleService', ['$q', '$http', function ($q, $http) {
	var ArticleService = {
		all: function () {
			// Mock
			return $q.when([
		        { id: 1, title: 'Article 1', description: 'The super article 1' }
		      , { id: 2, title: 'Article 2', description: 'The super article 2' }
		      , { id: 3, title: 'Article 3', description: 'The super article 3' }
		      , { id: 4, title: 'Article 4', description: 'The super article 4' }
		      , { id: 5, title: 'Article 5', description: 'The super article 5' }
		      , { id: 6, title: 'Article 6', description: 'The super article 6' }
		    ])

		    var req = {
				method : 'GET',
				url    : 'http://jsonplaceholder.typicode.com/users'
			}
			return $http(req)
		},

		find: function (id) {
			var article = { id: id, title: 'Article ' + id, description: 'The super article ' + id }
			return $q.when(article)
		}
	}

	return ArticleService
}])
