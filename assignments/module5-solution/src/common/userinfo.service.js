angular.module('common')
.service('RegUserInfoService',RegUserInfoService);

RegUserInfoService.$inject=[];
function RegUserInfoService(){
	var service=this;
	var userInfoArr=[];
	var lastloggedinUserInfo={};
	
	service.checkInfo=function(email){
		var exists=false;
		for(var i in userInfoArr){
			if(userInfoArr[i]["email"]===email){
				exists=true;
				break;
			}
		}
		return exists;
	}
	service.savePreferences=function(json){
		userInfoArr.push(json);
		lastloggedinUserInfo=angular.copy(json);
	}
	service.fetchPreferences=function(){
		return lastloggedinUserInfo;
	}
	
	service.fetchPreferencesByEmail=function(email){
		var json={};
		for(var i in userInfoArr){
			if(userInfoArr[i]["email"]===email){
				json=userInfoArr[i];
				break;
			}
		}
		return json;
	}
	service.fetchAllUsers=function(){
		return userInfoArr;
	}
}