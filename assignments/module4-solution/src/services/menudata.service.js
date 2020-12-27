angular.module('data')
.service('MenuDataService',MenuDataService);

function MenuDataService($q,$http){
	var service=this;
	
	service.getAllCategories=function(){
		var deferred=$q.defer();
		$http({
			method:"GET",
			url:"https://davids-restaurant.herokuapp.com/categories.json"
		})
		.then(function(output){
			if(undefined!==output){
				if(undefined!==output.status && output.status==200){
					return deferred.resolve(output.data);
				}
				else{
					return deferred.reject("Error Occurred...");
				}
			}			
			else{
				return deferred.reject("Error Occurred...");
			}
		});
		return deferred.promise;
	}
	service.getItemsForCategory=function(categoryShortName){
		var deferred=$q.defer();
		return $http({
			method:"GET",
			url:"https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName
		})
		.then(function(output){
			if(undefined!==output){
				if(undefined!==output.status && output.status==200){
					return deferred.resolve(output.data.menu_items);
				}
				else{
					return deferred.reject("Error Occurred...");
				}
			}			
			else{
				return deferred.reject("Error Occurred...");
			}
		});
		return deferred.promise;
	}
}