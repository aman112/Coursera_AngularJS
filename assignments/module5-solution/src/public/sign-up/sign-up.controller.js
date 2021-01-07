(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['ApiPath','MenuService','RegUserInfoService'];
function SignUpController(ApiPath,MenuService,RegUserInfoService) {
	var $ctrl = this;
	$ctrl.itemFetchCalled=false;
	$ctrl.submit=function(){
		$ctrl.itemFetchCalled=true;
		MenuService.getMenuItemsByShortName($ctrl.user.favDishName)
		.then(function(response){
			if(!RegUserInfoService.checkInfo($ctrl.user.email)){
				$ctrl.user.menuItem=response.data;
				RegUserInfoService.savePreferences($ctrl.user);
				$ctrl.itemFound=true;
				//$ctrl.user={};
				//$ctrl.itemFetchCalled=false;
			}
			else{
				alert("This email Id is already been registered.");
			}
		},function(error){
			$ctrl.itemFound=false;
		});
	}
}
})();
