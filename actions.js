
const{browser} = require("protractor");
describe('actions  and auto suggestive dropdown demo', function(){
	
	it('actions testcase', function(){
		
		browser.waitForAngularEnabled(false);
		browser.get('https://www.goibibo.com/');
		browser.manage().window().maximize();
		browser.sleep(3000);
		browser.actions().mouseMove(element(by.id("gosuggest_inputSrc"))).sendKeys("ind").perform();	
		
		});
		
	});