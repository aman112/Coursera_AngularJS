angular.module('data')
.service('MenuDataService',MenuDataService);

function MenuDataService($http){
	var service=this;
	
	service.getAllCategories=function(){
		return $http({
			method:"GET",
			url:"https://davids-restaurant.herokuapp.com/categories.json"
		})
		.then(function(data){
			console.log(data);
		});
	}
	service.getItemsForCategory=function(categoryShortName){
		return $http({
			method:"GET",
			url:"https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName
		})
		.then(function(data){
			console.log(data);
		});
	}
}