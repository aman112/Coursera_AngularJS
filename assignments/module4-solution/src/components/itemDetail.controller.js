angular.module('MenuApp')
.controller('ItemDetailController',ItemDetailController);

ItemDetailController.$inject=['$stateParams','categories','items'];
function ItemDetailController($stateParams,categories,item){
	var itemDetail=this;
	//itemDetail.categories=categories;
	//var item = categories[$stateParams.itemId];
	if(undefined!==item){
		itemDetail.name = item.name;
		itemDetail.quantity = item.quantity;
		itemDetail.description = item.description;
	}
}