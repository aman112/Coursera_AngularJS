angular.module('MenuApp')
.controller('ItemDetailController',ItemDetailController);

ItemDetailController.$inject=['$stateParams','categories'];
function MenuCategoriesController($stateParams,categories){
	var itemDetail=this;
	itemDetail.categories=categories;
	var item = categories[$stateParams.itemId];
	itemDetail.name = item.name;
	itemDetail.quantity = item.quantity;
	itemDetail.description = item.description;
}