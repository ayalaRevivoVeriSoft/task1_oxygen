
// import {TestUtils} from "../infrastracture/testUtils/TestUtils";
// import {WebActions} from "../infrastracture/actions/webActions";
// import {locators} from "../infarstracture/locators/locator";
import {locators} from "../infrastracture/locators/locator";

// import po from "../oxygen.po";

// WebActions.init()
// WebActions.open("https://www.hamichlol.org.il/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99")


web.transaction('01')
web.init()
web.open(env.urlHomePage)
web.isExist(locators.searchInput)
web.transaction('02.')
web.type(locators.searchInput,"java")
assert.contain(web.getAttribute(locators.div_search,"style"),"block","is exist")
var els = web.findElements(locators.list_search);
for (let el of els) {
 var text = web.getText(el);
 assert.contain(text.toLowerCase(),"java")
}



web.transaction('03.')
var els = web.findElements(locators.list_search);
for (let el of els) {
    var text = web.getText(el);

if(text.toLowerCase(),"java tutorial"){
     web.click(el)
break
}
}
web.transaction('04.')
const path = require('path')
const file = path.join(__dirname, '/1.xlsx')
var XL_1 = utils.readXlsx(file)
var list_output_frome_xl=[]
for (let x = 0; x < XL_1.length; x++) {
    list_output_frome_xl.push(XL_1[x].list_output)
}
log.info(list_output_frome_xl)
var els = web.findElements(locators.list_output);
var list_output_frome_web=[]
for (let el of els) {
list_output_frome_web.push((web.getHTML(el,false)).toLowerCase())
}
log.info(list_output_frome_web)


  


web.transaction('05.')

web.assertTextPresent("Java Tutorial",po.timeouts.short)


web.transaction('06.')
web.click(locators.btn_next)  
web.assertTextPresent("Introduction",po.timeouts.slow)


web.transaction('07.')
web.click(locators.btn_prev)  
web.assertTextPresent("JavaScript Tutorial",po.timeouts.short)

web.transaction('08.')
web.click(locators.btn_html)  

web.assertTextPresent("HTML Tutorial",po.timeouts.slow)

web.transaction('09.')
web.click(locators.btn_html_table)  
web.assertTextPresent("HTML Tables",po.timeouts.slow)

web.transaction('10.')
web.click(locators.btn_html_table)  
web.assertTextPresent("HTML Tables",po.timeouts.slow)

web.transaction('11.')
web.click(locators.btn_html_table)  
web.assertTextPresent("HTML Tables",po.timeouts.slow)


