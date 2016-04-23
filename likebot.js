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
var url = "http://www.behindthename.com/random/random.php?number=3&gender=both&surname=&all=no&usage_eng=1&usage_ins=1";

var userAgent = [
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2226.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.4; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36",
"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36",
"Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1944.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.3319.102 Safari/537.36",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2309.372 Safari/537.36",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2117.157 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1866.237 Safari/537.36",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/4E423F",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36",
"Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.517 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.16 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1623.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.17 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36",
"Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1467.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1464.0 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
"Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201",
"Mozilla/5.0 (Windows; U; Windows NT 6.1; it; rv:2.0b4) Gecko/20100818",
"Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9a3pre) Gecko/20070330",
"Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.9.2a1pre) Gecko",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; pl; rv:1.9.2.3) Gecko/20100401 Lightningquail/3.6.3",
"Mozilla/5.0 (X11; ; Linux i686; rv:1.9.2.20) Gecko/20110805",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2.13) Gecko/20101203 iPhone",
"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2.13; ) Gecko/20101203",
"Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.1b3) Gecko/20090305",
"Mozilla/5.0 (iPod; U; CPU iPhone OS 4_2_1 like Mac OS X; he-il) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5"
];

function getRandom(min, max) {
  return userAgent[Math.floor(Math.random() * (max - min)) + min];
}

console.log("TESSTT!!!!   !!!!!!!!  : " + getRandom(0,userAgent.length));

casper.userAgent(getRandom(0, userAgent.length));

// create random name
casper.start(url, function(data) {
	if (this.exists('.heavyhuge')) {
        var str = this.fetchText('.heavyhuge');
        var name = str.split(" ");
        console.log(name);
        console.log("name[1]: " + name[1]);
        console.log("name[2]: " + name[2]);
        console.log("name[3]: " + name[3]);
        console.log("name[4]: " + name[4])
        console.log("name[5]: " + name[5])
        if(name[2] == "") {
        	last = name[3];
        } else {
        	last = name[2];
        }
        fullname = name[1] + " " + last;
        // Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10))
        username = name[1] + last + name[5] + name[1];
        var max = 20;
        var min = 0;
        email = last + (Math.floor(Math.random() * (max - min +1)) + min) + "@" + name[1] + ".com";
        console.log(username);
    } else {
        console.log('.heavyhuge', 'ERROR');
    }
});


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
				this.click("div section a._ebwb5");
			});
			// logout
			/*casper.thenOpen('https://www.instagram.com/' + username, function() {
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
*/		});
	});



// follow


casper.run();










