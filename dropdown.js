describe('dropdown testcase', function(){

    function calc(a,b,c)
    {
        element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
        element.all(by.tagName("option")).each(function(item){

            item.getAttribute("value").then(function(value){
                
                if (value == c)
            {
                item.click();
                console.log(value);
            };

            });


            
        });

         element(by.id("gobutton")).click();

    }
	
	it('dropdown', function(){
		
        browser.get('http://juliemr.github.io/protractor-demo/');
		browser.manage().window().maximize();
		calc(3,4,"ADDITION");
        calc(6,7,"DIVISION");
        calc(9,7,"MODULO");
        calc(4,7,"MULTIPLICATION");

		
		});
		
	});