
import {TestUtils} from "../infrastracture/testUtils/TestUtils";
import {WebActions} from "../infrastracture/actions/webActions";
import {locators} from "../infrastracture/locators/locator";


web.transaction('01')
WebActions.init()
WebActions.open(env.urlHomePage)
WebActions.isExist(locators.searchInput)
web.transaction('02.')
WebActions.type(locators.searchInput,"java")
assert.contain(WebActions.getAttribute(locators.div_search,"style"),"block")
var els = WebActions.findElements(locators.list_search);
for (let el of els) {
 var text = WebActions.getText(el);
 assert.contain(text.toLowerCase(),"java")
}



web.transaction('03.')
var els = WebActions.findElements(locators.list_search);
for (let el of els) {
    var text = WebActions.getText(el);

if(text.toLowerCase(),"java tutorial"){
     WebActions.click(el)
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
var els = WebActions.findElements(locators.list_output);
var list_output_frome_web=[]
for (let el of els) {
list_output_frome_web.push((WebActions.getHTML(el,false)).toLowerCase())
}
log.info(list_output_frome_web)

web.transaction('05.')

WebActions.assertTextPresent("Java Tutorial",po.timeouts.short)


web.transaction('06.')
WebActions.click(locators.btn_next)  
WebActions.assertTextPresent("Introduction",po.timeouts.slow)


web.transaction('07.')
WebActions.click(locators.btn_prev)  
WebActions.assertTextPresent("JavaScript Tutorial",po.timeouts.short)

web.transaction('08.')
WebActions.click(locators.btn_html)  

WebActions.assertTextPresent("HTML Tutorial",po.timeouts.slow)

web.transaction('09.')
WebActions.click(locators.btn_html_table)  
WebActions.assertTextPresent("HTML Tables",po.timeouts.slow)

web.transaction('10.')
WebActions.click(locators.btn_html_table)  
WebActions.assertTextPresent("HTML Tables",po.timeouts.slow)

web.transaction('11.')
WebActions.click(locators.btn_html_table)  
WebActions.assertTextPresent("HTML Tables",po.timeouts.slow)


