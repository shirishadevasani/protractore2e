describe('chain locators testcase', function(){

    function add(a,b)
    {
        element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }
	
	it('chain locator', function(){
		
        browser.get('http://juliemr.github.io/protractor-demo/');
		browser.manage().window().maximize();
		add(3,4);
        add(6,7);
        add(9,7);
        add(4,7);
        element.all(by.repeater("result in memory")).count().then(function(text){
            console.log(text);
        });

        element.all(by.repeater("result in memory")).each(function(item){

            item.element(by.css("td:nth-child(3)")).getText().then(function(text){

                console.log(text);
            });

        });
		
		});
		
	});