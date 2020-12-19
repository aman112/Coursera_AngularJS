(function(){
	var App=angular.module('myFirstApp',[]);
	
	App.controller('myParentController',ParentController);
	App.controller('myChildController',ChildController);
	function ParentController($scope){
		$scope.ParentValue="1";
		$scope.pc=this;
		$scope.pc.ParentValue="4";
		//console.log($injector.annotate(Controller));
	}
	function ChildController($scope,$timeout){
		$scope.ParentValue="2";
		$scope.pc.ChildValue="5";
		console.log("child $scope.ParentValue: ",$scope.ParentValue);
		console.log("parent $scope.ParentValue: ",$scope.$parent.ParentValue);
		console.log("child $scope.ParentValue: ",$scope.pc.ParentValue);
		console.log("parent $scope.ParentValue: ",$scope.$parent.pc.ParentValue);
		console.log("$scope.$parent.pc===$scope.pc: ",($scope.$parent.pc===$scope.pc));
		console.log("child $scope: ",$scope);
		$timeout(function(){
			console.log("inside $timeout");
		},2000);
		//console.log($injector.annotate(Controller));
	}
	
	App.controller('myParentController1',ParentController1);
	App.controller('myChildController1',ChildController1);
	App.controller('myChildController2',ChildController2);
	function ChildController1($scope){
		var child1=this;
		child1.value="4";
		console.log("Child 1: ",child1);
		console.log("Child 1 scope: ",$scope);
	}
	function ChildController2($scope){
		var child2=this;
		child2.value="7";
		console.log("Child 2: ",child2);
		console.log("Child 2 scope: ",$scope);
	}
	function ParentController1(){
		var parent=this;
		parent.value="4";
	}
	
	App.controller('shoppingList',ShoppingList);
	App.controller('ShoppingListShow',ShoppingListShow);
	App.service('ShoppingListService',ShoppingListService);
	
	
	function ShoppingListShow(ShoppingListService){
		var showList=this;
		showList.Items=ShoppingListService.getItems();
		showList.total=ShoppingListService.getTotal();
	}
	function ShoppingList(ShoppingListService){
		var addItemArr=this;
		addItemArr.itemName="";
		addItemArr.itemQuantity="";
		
		addItemArr.additems=function(){
			if(addItemArr.itemName!=="" && addItemArr.itemQuantity!==""){
				ShoppingListService.addItems(addItemArr.itemName,addItemArr.itemQuantity);
				addItemArr.itemName="";
				addItemArr.itemQuantity="";
				ShoppingListService.calculateTotal();
			}
			else if (addItemArr.itemName===""){
				alert("Please enter Item Name");
			}
			
			else if (addItemArr.itemQuantity===""){
				alert("Please enter Item Quantity");
			}
		}
	}
	
	function ShoppingListService(){
		var service=this;
		var items=[];
		var total=0;
		service.addItems=function(name,quan){
			var item={
				itemName:name,
				itemQuantity:quan
			}
			items.push(item);
		};
		service.getItems=function(){
			return items;
		};
		service.calculateTotal=function(){
			total=0;
			for(var i in items){
				total=total+ parseInt(items[i].itemQuantity);
			}
		};
		service.getTotal=function(){
			return total;
		};
	}
})()