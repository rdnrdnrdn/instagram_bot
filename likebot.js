var casper = require('casper').create({
	verbose: true,
	logLevel: "debug"
});
var fs = require('fs');
var fname = "page.html";
var save = fs.pathJoin(fs.workingDirectory, 'log', fname);

var count = 5;



/*casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});*/

var casper = require('casper').create({
	verbose: true,
	logLevel: "debug"
});

var username = "";
var email = "";
var fullname = "";
var last = "";
var password = "budibadabudi";
var url = "http://www.behindthename.com/random/random.php?number=2&gender=both&surname=&all=no&usage_ins=1";

// create random name
casper.start(url, function(data) {
	if (this.exists('.heavyhuge')) {
        var str = this.fetchText('.heavyhuge');
        var name = str.split(" ");
        console.log("name[1]: " + name[1]);
        console.log("name[2]: " + name[2]);
        console.log("name[3]: " + name[3]);
        if(name[2] == "") {
        	last = name[3];
        } else {
        	last = name[2];
        }
        fullname = name[1] + " " + last;
        username = name[1] + last + Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10));
        email = last  + "@" + name[1] + ".com";
        console.log(username);
    } else {
        console.log('.heavyhuge', 'ERROR');
    }
});

casper.userAgent('Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2226.0 Safari/537.36');


phantom.clearCookies();


casper.thenOpen('https://www.instagram.com', function() {
    fs.write(save, this.getPageContent() + '\n', 'w');
});


casper.waitForSelector("form[class='_3bqd5']", function() {
		console.log("FORM FOUND!!!");
		this.fillSelectors("form[class='_3bqd5']", {
			'input[name="email"]' : email,
			'input[name="fullName"]' : fullname,
			'input[name="username"]' : username,
			'input[name="password"]' : password,
		});
		/*casper.sendKeys('input[name="email"]', "" + email, {reset: true});
		casper.sendKeys('input[name="fullName"]', "" + fullname, {reset: true});
		casper.sendKeys('input[name="username"]', "" + username, {reset: true});
		casper.sendKeys('input[name="password"]', "" + password, {reset: true});*/

		console.log("Logging in...");
		this.click("form[class='_3bqd5'] div button._1on88");
		casper.wait(4000, function() {
			fname = "homePage.html";
			save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
			fs.write(save, this.getPageContent() + '\n', 'w');

			
			/*casper.start('https://instagram.com/farandyramadhana', function() {
				fname = "profilePage.html";
				save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
				fs.write(save, this.getPageContent() + '\n', 'w');
				this.click("div._hcch2 span button._jvpff");
			});*/
			casper.thenOpen('https://www.instagram.com/p/BEjf1ZHBeFv/?taken-by=toshikijahja', function() {
				fname = "profilePage.html";
				save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
				fs.write(save, this.getPageContent() + '\n', 'w');
				casper.wait(3000, function() {
					this.click("div section a._ebwb5");
				});
			});
			// logout
			casper.thenOpen('https://www.instagram.com/' + username, function() {
				fname = "profilePage.html";
				save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
				fs.write(save, this.getPageContent() + '\n', 'w');
				this.click("div._de9bg div._8mm5v a._qu5wj button._fcwm8");
				this.click("ul._c4s9s li._bt6iq button._4y3e3");
				casper.wait(3000, function() {
					fname = "instagramPage.html";
					save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
					fs.write(save, this.getPageContent() + '\n', 'w');
					count++;
				});
			});
		});
	});



// follow


casper.run();










