(function(){
	var App=angular.module('secondModuleAssignment',[]);
	App.controller('List1Controller',List1Controller);
	App.controller('List2Controller',List2Controller);
	App.service('ShoppingListAddService',ShoppingListAddService);
	App.service('BoughtListAddService',BoughtListAddService);
	
	List1Controller.$inject=['ShoppingListAddService','BoughtListAddService'];
	function List1Controller(ShoppingListAddService,BoughtListAddService){
		var list1=this;
		list1.items=[
			{"name":"item1","quantity":"10"},
			{"name":"item2","quantity":"5"},
			{"name":"item3","quantity":"20"},
			{"name":"item4","quantity":"1"},
			{"name":"item5","quantity":"15"}
		];
		list1.Itembought=function(index){
			BoughtListAddService.addItems(list1.items[index].name,list1.items[index].quantity);
			list1.items.splice(index,1);
		}
	}
	
	List2Controller.$inject=['BoughtListAddService'];
	function List2Controller(BoughtListAddService){
		var list2=this;
		list2.items=[];
		list2.items=BoughtListAddService.getItems();
	}
	
	function ShoppingListAddService(){
		var service=this;
		var list=[];
		
		service.addItems=function(name,quantity){
			var item={
				name:name,
				quantity:quantity
			}
			list.push(item);
		}
		service.getItems=function(){
			return list;
		}
	}
	function BoughtListAddService(){
		var service=this;
		var list=[];
		
		service.addItems=function(name,quantity){
			var item={
				name:name,
				quantity:quantity
			}
			list.push(item);
		}
		service.getItems=function(){
			return list;
		}
	}
})()