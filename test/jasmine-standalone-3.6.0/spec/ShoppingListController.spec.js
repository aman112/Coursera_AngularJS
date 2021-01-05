describe('ShoppingListController',()=>{
	var $controller;
	var MockService;
	var list;
	
	beforeEach(()=>{
		module("ShoppingListApp");
	});
	//Passing the manually created Mock Service when actual service not yet created [Start]
	beforeEach(inject((_$controller_)=>{
		$controller=_$controller_;
		MockService={};
		MockService.addItem = (name,quan)=>{
			throw new Error("Test Message");
		}
		MockService.getItems=()=>{
			return null;
		}
		
		list=$controller("ShoppingListController",{
			ShoppingListService:MockService
		});
	}));
	
	it("max items reached error should occur",()=>{
		list.addItem("a",3);
		list.addItem("a",3);
		list.addItem("a",3);
		expect(list.errorMessage).toBe("Test Message");
	});
	//Passing the manually created Mock Service when actual service not yet created [End]
	
	//Passing actual Service [Start]
	describe("actual service testing",()=>{
		beforeEach(inject((_$controller_,ShoppingListService)=>{
			$controller=_$controller_;
			
			list=$controller("ShoppingListController",{
				ShoppingListService:ShoppingListService
			});
		}));
		
		it("max items reached error should occur",()=>{
			list.addItem("a",3);
			list.addItem("a",3);
			list.addItem("a",3);
			expect(list.errorMessage).toBe("Max items (2) reached.");
		});
	})	
	//Passing actual Service [End]
});