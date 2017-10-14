'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('SignupCtrl', [
  	"Data","$scope","$state"
  	, function (Data,$scope,$state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.name =""
    $scope.age =""

    $scope.saveUserInfo = function(){
    	var dataPromise = Data.setData(
    		'http://127.0.0.1:52273/user',
    		 '&name=' + $scope.name  + '&age=' + $scope.age );
    	dataPromise.then(function(restful){
    		$scope.name = ""
    		$scope.age = ""
    		}, 	function(reason){}
    		,	function(update){}) 
     
    }
 

  }]);
