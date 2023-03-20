web.transaction('01. Initialize')
web.init()

web.transaction('02. Open Wikipedia Main Page')
web.open(env.url)

web.transaction('03. Seach For Selenium')
po.search('Selenium')

web.transaction('04. Assert Results')
web.assertTextPresent('Selenium')
