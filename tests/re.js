
web.init();
web.selectWindow('title=HTML Tutorial');
//       xpath:link: (//a[contains(text(),\'HTML Tables\')])[1]
// xpath:idRelative: //div[@id=\'leftmenuinnerinner\']/a[18]
//       xpath:href: (//a[contains(@href, \'html_tables.asp\')])[1]
//   xpath:position: //div[6]/div/div/a[18]
//              css: css=#leftmenuinnerinner > a:nth-child(22)
web.click('(//a[contains(text(),\'HTML Tables\')])[1]'
web.selectWindow('title=Fwd: תרגיל אוטומציה - ayala.revivo@verisoft.co - דואר Nir Gallner');
// xpath:idRelative: //div[@id=\':ms\']/div[1]/div[2]/div[2]/div[19]
//   xpath:position: //div[2]/div[2]/div[19]
//              css: css=#\\:ms > div:nth-child(1) > div.gmail_quote > div:nth-child(4) > div:nth-child(20)
web.click('//div[@id=\':ms\']/div[1]/div[2]/div[2]/div[19]');

// xpath:idRelative: //div[@id=\':4\']/div[2]/div[1]/div/div[1]/div/div
//   xpath:position: //div[5]/div/div/div/div/div[1]/div[2]/div[1]/div/div[1]/div/div
//              css: css=#\\:4 > div:nth-child(2) > div.iH.bzn > div > div:nth-child(1) > div > div
web.click('//div[@id=\':4\']/div[2]/div[1]/div/div[1]/div/div');

// xpath:idRelative: //span[@id=\':1q\']/span
//   xpath:position: //tr[3]/td[5]/div/div/div/span/span
//              css: css=#\\:1q > span
web.click('//span[@id=\':1q\']/span');

// xpath:idRelative: //div[@id=\':mx\']/div[1]/div/div[7]/span
//   xpath:position: //div[7]/span
//              css: css=#\\:mx > div:nth-child(1) > div > div:nth-child(9) > span
web.click('//div[@id=\':mx\']/div[1]/div/div[7]/span');

// xpath:idRelative: //div[@id=\':1\']/div/div[3]/div/table/tr/td/div[2]/div[2]/div/div[3]/div
//   xpath:position: //td/div[2]/div[2]/div/div[3]/div
//              css: css=#\\:1 > div > div:nth-child(3) > div > table > tr > td > div.nH.a98.iY > div.nH.aHU > div > div:nth-child(3) > div
web.type('//div[@id=\':1\']/div/div[3]/div/table/tr/td/div[2]/div[2]/div/div[3]/div', 'c');
);

web.selectWindow('title=HTML Tables');
// xpath:idRelative: //div[@id=\'main\']/h1/span
//   xpath:position: //h1/span
//              css: css=#main > h1 > span
web.click('//div[@id=\'main\']/h1/span');

// xpath:idRelative: //div[@id=\'main\']/h1/span
//   xpath:position: //h1/span
//              css: css=#main > h1 > span
web.click('//div[@id=\'main\']/h1/span');

// xpath:idRelative: //div[@id=\'main\']/h1/span
//   xpath:position: //h1/span
//              css: css=#main > h1 > span
web.click('//div[@id=\'main\']/h1/span');
