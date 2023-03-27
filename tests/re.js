
web.init();
web.selectWindow('title=Java Output Values / Print Text');
//       xpath:link: //a[contains(text(),\'Print Numbers\')]
// xpath:idRelative: //div[@id=\'leftmenuinnerinner\']/div[1]/a[2]
//       xpath:href: (//a[contains(@href, \'java_output_numbers.asp\')])[1]
//   xpath:position: //div[6]/div/div/div[1]/a[2]
//             link: link=Print Numbers
//              css: css=#leftmenuinnerinner > div:nth-child(7) > a:nth-child(2)
web.click('//a[contains(text(),\'Print Numbers\')]');
