(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['RegUserInfoService','userInfo'];
function MyInfoController(RegUserInfoService,userInfo) {
  var $ctrl = this;
  $ctrl.userExists=false;
  if(undefined!==userInfo && null!==userInfo && userInfo!=="" && undefined!==userInfo.email){
	$ctrl.userInfo=userInfo;
	$ctrl.userExists=true;
  }
}
})();
