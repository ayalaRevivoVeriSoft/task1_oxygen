
web.init();
web.open('https://www.w3schools.com/');

web.selectWindow('title=W3Schools Online Web Tutorials');
//               id: id=search2
// xpath:attributes: //input[@id=\'search2\']
// xpath:idRelative: //div[@id=\'main\']/div[2]/div/form/input
//   xpath:position: //form/input
//              css: css=#search2
web.click('id=search2');

//               id: id=search2
// xpath:attributes: //input[@id=\'search2\']
// xpath:idRelative: //div[@id=\'main\']/div[2]/div/form/input
//   xpath:position: //form/input
//              css: css=#search2
web.type('id=search2', 'java');

// xpath:idRelative: //div[@id=\'listofsearchresults\']/a[1]
//       xpath:href: (//a[contains(@href, \'/js/default.asp\')])[2]
//   xpath:position: //form/div/a[1]
//             link: link=JavaScript Tutorial
//              css: css=#listofsearchresults > a.search_item.search_active
web.click('//div[@id=\'listofsearchresults\']/a[1]');

web.selectWindow('title=JavaScript Tutorial');
//       xpath:link: (//a[contains(text(),\'Next ❯\')])[1]
// xpath:idRelative: //div[@id=\'main\']/div[2]/a[2]
//       xpath:href: (//a[contains(@href, \'js_intro.asp\')])[2]
//   xpath:position: //div[7]/div[1]/div[1]/div[2]/a[2]
//              css: css=#main > div:nth-child(3) > a.w3-right.w3-btn
web.click('(//a[contains(text(),\'Next ❯\')])[1]');

web.selectWindow('title=JavaScript Introduction');
//       xpath:link: (//a[contains(text(),\'❮ Previous\')])[1]
// xpath:idRelative: //div[@id=\'main\']/div[2]/a[1]
//       xpath:href: (//a[contains(@href, \'default.asp\')])[63]
//   xpath:position: //div[7]/div[1]/div[1]/div[2]/a[1]
//              css: css=#main > div:nth-child(3) > a.w3-left.w3-btn
web.click('(//a[contains(text(),\'❮ Previous\')])[1]');
