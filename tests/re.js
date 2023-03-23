
web.init();
web.selectWindow('title=Documentation for Visual Studio Code');
// xpath:idRelative: //div[@id=\'main-content\']/div/div/div[2]/div[2]/p
//   xpath:position: //div[2]/div[2]/p
//              css: css=#main-content > div > div > div.col-sm-9.col-md-8.body > div:nth-child(2) > p
web.click('//div[@id=\'main-content\']/div/div/div[2]/div[2]/p');

// xpath:idRelative: //a[@id=\'nav-download\']/span
//   xpath:position: //li[3]/a/span
//              css: css=#nav-download > span
web.click('//a[@id=\'nav-download\']/span');

web.selectWindow('title=Download Visual Studio Code - Mac, Linux, Windows');
// xpath:idRelative: //div[@id=\'main-content\']/div/div[1]/div/div/h1
//   xpath:position: //h1
//              css: css=#main-content > div > div:nth-child(1) > div > div > h1
web.click('//div[@id=\'main-content\']/div/div[1]/div/div/h1');
