describe('First Jasmine TestCase',()=>{
	var items1;
	var items2;
	var items3;
	beforeEach(()=>{
		items1=["a","b","cook"];
		items2=["a","cookie","c"];
		items3=["a","b","Cookie"];
	});
	
	it("1st case should return false",()=>{
		var result=detectCookies(items1);
		expect(result).toBe(false);
	});
	it("2nd case should return true",()=>{
		result=detectCookies(items2);
		expect(result).toBe("cookie");
	});
	it("3rd case should return true",()=>{
		result=detectCookies(items3);
		expect(result).toBe("Cookie");
	});
});