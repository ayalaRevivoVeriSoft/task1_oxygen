
web.init();
web.selectWindow('title=Java Tutorial');
//       xpath:link: (//a[contains(text(),\'HTML\')])[1]
// xpath:idRelative: //div[@id=\'topnav\']/div/div[1]/a[3]
//       xpath:href: (//a[contains(@href, \'/html/default.asp\')])[1]
//   xpath:position: //div[4]/div/div[1]/a[3]
//             link: link=HTML
//              css: css=#topnav > div > div.w3-bar.w3-left > a:nth-child(3)
web.click('(//a[contains(text(),\'HTML\')])[1]');

web.selectWindow('title=HTML Tutorial');
//       xpath:link: (//a[contains(text(),\'HTML Tables\')])[1]
// xpath:idRelative: //div[@id=\'leftmenuinnerinner\']/a[18]
//       xpath:href: (//a[contains(@href, \'html_tables.asp\')])[1]
//   xpath:position: //div[6]/div/div/a[18]
//              css: css=#leftmenuinnerinner > a:nth-child(22)
web.click('(//a[contains(text(),\'HTML Tables\')])[1]');
