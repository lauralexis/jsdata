'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, $state, $stateParams, User) {
  $scope.signup = {
    username:'',
    password:''
  }
  $scope.sendSignup = function(){
    console.log($scope.signup)
    User.create($scope.signup)
    .then(function(response){
      console.log('new user: ', response)
    })
    // userId stateParams
    // $state.go('create', {
    //   userId = $stateParams.user
    // })
  }


  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */

})