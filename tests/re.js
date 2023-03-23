
web.init();
web.selectWindow('title=W3Schools Online Web Tutorials');
// xpath:idRelative: //div[@id=\'listofsearchresults\']/a[2]
//       xpath:href: (//a[contains(@href, \'/java/default.asp\')])[2]
//   xpath:position: //form/div/a[2]
//             link: link=JAVA Tutorial
//              css: css=#listofsearchresults > a:nth-child(2)
web.click('//div[@id=\'listofsearchresults\']/a[2]');
