describe('protrator baby steps', function(){
	
	it('calculator- add', function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.manage().window().maximize();
		element(by.model("first")).sendKeys(3);
		element(by.model("second")).sendKeys(5).then(function(){
			browser.sleep(3000);
		});
		element(by.id("gobutton")).click();
		browser.sleep(6000);
		expect(element(by.xpath("//table[@class='table']//tr//td[3]")).getText()).toEqual("8").then(function(){
			console.log("Im last step to execute");
		
		});
		
	});

	it('open angular js website', function(){
		
		browser.get('https://angularjs.org');
		browser.manage().window().maximize()
		element(by.xpath("//a[contains(text(),'angular.io')]")).click()
		element(by.xpath("//input[@placeholder='Search']")).sendKeys("Testing")
		browser.sleep(6000)	
		})


});


		
	