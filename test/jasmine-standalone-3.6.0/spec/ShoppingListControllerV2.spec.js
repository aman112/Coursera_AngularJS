describe('V2 ShoppingListController',()=>{
	var $controller;
	var list;
	
	beforeEach(()=>{
		module("ShoppingListApp");
		module(function($provide){//**Not to use arrow function for $provide**
			$provide.service("MockService",function(){
				var service=this;
				service.addItem = (name,quan)=>{
					throw new Error("Test Message");
				}
				service.getItems=()=>{
					return null;
				}
			});
		});
	});
	//Passing the Angular created Mock Service when actual service not yet created [Start]
	beforeEach(inject((_$controller_,MockService)=>{
		$controller=_$controller_;
		
		list=$controller("ShoppingListController",{
			ShoppingListService:MockService
		});
	}));
	
	it("test msg error should occur",()=>{
		list.addItem("a",3);
		expect(list.errorMessage).toBe("Test Message");
	});
	//Passing the Angular created Mock Service when actual service not yet created [End]
	
	//Passing actual Service [Start]
	describe("actual service testing",()=>{
		beforeEach(inject((_$controller_,ShoppingListService)=>{
			$controller=_$controller_;
			
			list=$controller("ShoppingListController",{
				ShoppingListService:ShoppingListService
			});
		}));
		
		it("max 2 items reached error",()=>{
			list.addItem("a",3);
			list.addItem("a",3);
			list.addItem("a",3);
			expect(list.errorMessage).toBe("Max items (2) reached.");
		});
	});	
	//Passing actual Service [End]
});