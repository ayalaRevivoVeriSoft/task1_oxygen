import {WebActions} from "../actions/webActions";
import {locators} from "../locators/locator";

export class TestUtils {

    static isOnPage = (locator) => {
       WebActions.isExist(locator)
    };

   
static search(locator,item){
WebActions.setValue(locator, item)
WebActions.assertTextPresent(item,10)

WebActions.click(locators.searchButton)  
}


}
