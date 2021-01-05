(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http','ApiPath'];
function SignUpController($http,ApiPath) {
  var $ctrl = this;
  
  $ctrl.submit=function(){
	alert('Submit called...');
	  $http({
		  method:"GET",
		  url:ApiPath+"/menu_items/"+$ctrl.user.favDishName+".json"
	  })
	  .then(function(response){
		console.log("service add called...",$ctrl.user);
		$ctrl.itemFound=true;
	  },function(error){
		  $ctrl.itemFound=false;
	  });
	}
}
})();
