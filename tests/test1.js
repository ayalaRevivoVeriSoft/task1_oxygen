// web.transaction('01. Initialize')
// web.init()

// web.transaction('02. Open URL')
// web.open(env.url)
// web.waitForVisible('div#app > div.body-height')

// web.transaction('03. Open Elements Section')
// web.click('//div[@class="card-body"]//*[contains(text(), "Elements")]')

var os = require('os')
os.userInfo().homedir

var XL_1 = utils.readXlsx(`${os.userInfo().homedir}\\Documents\\GitHub\\task1_oxygen\\1.xlsx`)
// var XL_2 = utils.readXlsx(`${os.userInfo().homedir}//desktop//2.xlsx`)

log.info(XL_1[0])
// log.info(XL_2[1].age)