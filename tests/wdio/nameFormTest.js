var expect = require('chai').expect;

describe("Verify App Page", function() {
	it("check if the app loads fine", function(done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('http://10.132.50.188:3000');
        var title = browser.getTitle();
        console.log('App Title is: ' + title);
        expect(title).equal('React App'); 
        browser.pause(3000);
	});

	it("check if submit button works", function(done) {
        browser.url('http://10.132.50.188:3000/');
        var title = browser.getTitle();
        browser.click('#submitButton');
        console.log('App Title is: ' + title);
		browser.pause(3000);
	});
});