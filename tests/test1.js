// web.transaction('01. Initialize')
// web.init()

// web.transaction('02. Open URL')
// web.open('C://Users//ayala//Documents//GitHub//task1_oxygen//1.xlsx')
// web.waitForVisible('div#app > div.body-height')

// web.transaction('03. Open Elements Section')
// web.click('//div[@class="card-body"]//*[contains(text(), "Elements")]')

var os = require('os')
os.userInfo().homedir

var XL_1 = utils.readXlsx('C://Users//ayala//Documents//GitHub//task1_oxygen//1.xlsx')
// var XL_2 = utils.readXlsx(`${os.userInfo().homedir}//desktop//2.xlsx`)


// web.type('name=search', params.name);

// log.info(params.list_output)
// log.info(params.list_output)
log.info(Object.entries(XL_1.name))
// web.type('name=search', 'Tony');