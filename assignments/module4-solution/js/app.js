(function(){
	var App=angular.module('NarrowItDownApp',[]);
	App.controller('NarrowItDownController',NarrowItDownController);
	App.service('MenuSearchService',MenuSearchService);
	App.directive('foundItems',FoundItemsDirective);
	
	NarrowItDownController.$inject=['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var list=this;
		list.searchTerm="";
		list.found=[];
		list.getItems=function(){
			list.found=MenuSearchService.getMatchedMenuItems(list.searchTerm);
		}
		list.removeItem=function(index){
			list.found.splice(index,1);
		}
	}
	
	function MenuSearchService($http){
		var service=this;
		var list=[];
		
		service.getMatchedMenuItems=function(searchTerm){
			list=[];
			if(searchTerm!==""){
				$http({
					method:'GET',
					url:"https://davids-restaurant.herokuapp.com/menu_items.json"
				})
				.then(function(result){
					if(undefined!==result && undefined!==result.data && undefined!==result.data.menu_items && result.data.menu_items!==""){
						for(var i in result.data.menu_items){
							if(result.data.menu_items[i]["description"].indexOf(searchTerm)>=0){
								list.push(result.data.menu_items[i]);
							}
						}
					}
				})
				.catch(function(error){
					console.log(error);
				});
			}
			return list;
		}
	}
	function FoundItemsDirective(){
		var ddo={
			templateUrl:"directives/foundItems.html",
			controller:"NarrowItDownController",
			controllerAs:"narrowList",
			bindToController: true,
			scope:{
				found:"<",
				onRemove:"&"
			}
		};
		return ddo;
	}
})()