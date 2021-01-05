(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http'];
function SignUpController($http) {
  var $ctrl = this;
  
  $ctrl.submit=function(){
	alert('Submit called...');
	  $http({
		  method:"GET",
		  url:ApiPath+"/menu_items/"+$ctrl.user.favDishName+".json"
	  })
	  .then(function(response){
		  console.log(response);
		  if(response.status=="500" && response.error==="Internal Server Error"){
			  $ctrl.itemFound=false;
		  }
		  else{
			  console.log("service add called...");
			  $ctrl.itemFound=true;
		  }
	  });
	}
}
})();
