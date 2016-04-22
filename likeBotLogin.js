var casper = require('casper').create({
	verbose: true,
	logLevel: "debug"
});
var fs = require('fs');
var fname = "page.html";
var save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);

var prefix = "badabudibada";
var suffix = "test20";
var username = prefix + suffix;
var email = prefix + "+" + suffix + "@gmail.com";
var fullname = "badabudi";
var password = "budibadabudi";

casper.start('https://instagram.com', function() {
	
	fs.write(save, this.getPageContent() + '\n', 'w');
});

casper.userAgent('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1');

casper.waitForSelector("form[class='_3bqd5']", function() {
	console.log("FORM FOUND!!!");

	this.click("p._eeitw a._k6cv7");

	/*casper.waitForSelector("form[class='_rwf8p']", function() {
		console.log("LOGIN FORM FOUND!!!!!");

		this.fillSelectors("form[class='_rwf8p']", {
			'input[name="username"]' : username,
			'input[name="password"]' : password,
		});

		console.log("Logging in...");
		this.click("div button._rz1lq");

		casper.wait(5000, function() {
			fname = "homePage.html";
			save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
			fs.write(save, this.getPageContent() + '\n', 'w');
			casper.start('https://instagram.com/ryantjong', function() {
				fname = "profilePage.html";
				save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
				fs.write(save, this.getPageContent() + '\n', 'w');
				this.click("div._hcch2 span button._jvpff");
			});
		});
	});*/

	/*this.fillSelectors("form[class='_3bqd5']", {
		'input[name="email"]' : email,
		'input[name="fullName"]' : fullname,
		'input[name="username"]' : username,
		'input[name="password"]' : password,
	});*/
	/*casper.sendKeys('input[name="email"]', "" + email, {reset: true});
	casper.sendKeys('input[name="fullName"]', "" + fullname, {reset: true});
	casper.sendKeys('input[name="username"]', "" + username, {reset: true});
	casper.sendKeys('input[name="password"]', "" + password, {reset: true});*/

	/*console.log("Logging in...");
	this.click("form[class='_3bqd5'] div button._1on88");
	casper.wait(5000, function() {
		fname = "homePage.html";
		save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
		fs.write(save, this.getPageContent() + '\n', 'w');
		casper.start('https://instagram.com/farandyramadhana', function() {
			fname = "profilePage.html";
			save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
			fs.write(save, this.getPageContent() + '\n', 'w');
			this.click("div._hcch2 span button._jvpff");
		});
	});*/
});

casper.waitForSelector("form[class='_rwf8p']", function() {
	console.log("LOGIN FORM FOUND!!!!!");

	this.fillSelectors("form[class='_rwf8p']", {
		'input[name="username"]' : username,
		'input[name="password"]' : password,
	});

	console.log("Logging in...");
	this.click("div button._rz1lq");

	/*casper.wait(5000, function() {
		fname = "homePage.html";
		save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
		fs.write(save, this.getPageContent() + '\n', 'w');
		casper.start('https://instagram.com/ryantjong', function() {
			fname = "profilePage.html";
			save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
			fs.write(save, this.getPageContent() + '\n', 'w');
			this.click("div._hcch2 span button._jvpff");
		});
	});*/
});

casper.waitForSelector("div div span._9ea4j", function() {
	fname = "homePage.html";
	save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
	fs.write(save, this.getPageContent() + '\n', 'w');
	
});

casper.thenOpen('https://instagram.com/farandyramadhana', function() {
	fname = "profilePage.html";
	save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
	fs.write(save, this.getPageContent() + '\n', 'w');
	this.click("div._hcch2 span button._jvpff");
});

/*casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});*/

casper.run();