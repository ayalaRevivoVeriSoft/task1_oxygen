import {TestUtils} from "../infrastracture/testUtils/TestUtils";
import {WebActions} from "../infrastracture/actions/webActions";
// import {locators} from "../infarstracture/locators/locator";
import {locators} from "../infrastracture/locators/locator";

// import po from "../oxygen.po";

// WebActions.init()
// WebActions.open("https://www.hamichlol.org.il/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99")



web.transaction('01')
WebActions.init()
WebActions.open(env.urlHomePage)
TestUtils.isOnPage(locators.searchInput)

web.transaction('02.')
// TestUtils.setValue(locators.searchInput,"java")
// WebActions.assertTextPresent('JavaScript Tutorial',po.timeouts.short)
// var div_search =web.getElementByLocator("listofsearchresults");
// var style = div_search.getAttribute("style");
// if (style.indexOf("none") > -1) {
//     log.info("fff")
//   // do something if style contains "none"
// }
// web.transaction('03.')
// TestUtils.search(locators.searchInput,"java")


// web.transaction('04.')
// // log.info(locators.menu_list)
// // TestUtils.assertArrayEquals(locators.menu_list, locators.menu_list);

// web.transaction('05.')
// WebActions.assertTextPresent("JavaScript Tutorial",po.timeouts.short)


// web.transaction('06.')
// WebActions.click(locators.btn_next)  
// WebActions.assertTextPresent("JavaScript Introduction",po.timeouts.short)

// web.transaction('07.')
// WebActions.click(locators.btn_prev)  
// WebActions.assertTextPresent("JavaScript Tutorial",po.timeouts.short)

// web.transaction('08.')
// WebActions.click(locators.btn_html)  

// WebActions.assertTextPresent("HTML Tutorial",po.timeouts.short)

// web.transaction('09.')
// WebActions.click(locators.btn_html_table)  
// WebActions.assertTextPresent("HTML Tables",po.timeouts.short)


