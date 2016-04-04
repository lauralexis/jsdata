'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			users: function (User) {
				return User.findAll({});
			},
			posts: function (Post, users) {
				return Post.findAll({});
			}
		}
	})
})

app.controller('MainController', function($scope, users, posts, Post) {
	$scope.allUsers = users;
	$scope.allPosts = posts;

	var postData = Post.getAll();
	Post.inject(postData);
	console.log(Post.getAll());
})


