angular.module('MenuApp')
.controller('ItemDetailController',ItemDetailController);

ItemDetailController.$inject=['$stateParams','items'];
function ItemDetailController($stateParams,items){
	var itemDetail=this;
	itemDetail.items=items;
	itemDetail.category_name=$stateParams.name;
	itemDetail.category_shortName=$stateParams.short_name;
}