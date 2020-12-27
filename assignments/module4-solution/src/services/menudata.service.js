angular.module('data')
.service('MenuDataService',MenuDataService);

function MenuDataService($q,$http){
	var service=this;
	
	service.getAllCategories=function(){
		return $http({
			method:"GET",
			url:"https://davids-restaurant.herokuapp.com/categories.json"
		})
		.then(function(output){
			return (output.data);
		});
	}
	service.getItemsForCategory=function(categoryShortName){
		return $http({
			method:"GET",
			url:"https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName
		})
		.then(function(output){
			return (output.data.menu_items);
		});
	}
}