(function(){
	var App=angular.module('myFirstApp',[]);
	
	App.controller('myFirstController',Controller);
	function Controller($scope,$injector,$filter){
		$scope.firstElement="qwertyyy";	
		console.log($injector.annotate(Controller));
	}
})()