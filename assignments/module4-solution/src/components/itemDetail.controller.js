angular.module('MenuApp')
.controller('ItemDetailController',ItemDetailController);

ItemDetailController.$inject=['$stateParams','categories'];
function ItemDetailController($stateParams,categories){
	var itemDetail=this;
	itemDetail.categories=categories;
	var item = categories[$stateParams.itemId];
	if(undefined!==item){
		itemDetail.name = item.name;
		itemDetail.quantity = item.quantity;
		itemDetail.description = item.description;
	}
}