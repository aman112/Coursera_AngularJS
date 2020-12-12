(function(){
	var App=angular.module('firstModuleAssignment',[]);
	App.controller('Controller',Controller);
	
	function Controller($scope){
		$scope.input="";
		$scope.message="";
		$scope.checkInput=function(){
			var commaCount=$scope.input.split(",").length;
			if($scope.input===""){
				$scope.message="Please enter data first...";
			}
			else if(commaCount>=4){
				$scope.message="Too much!!";
			}
			else{
				$scope.message="Enjoy!!";
			}
		}
	}
})()