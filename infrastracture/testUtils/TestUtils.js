import {WebActions} from "../actions/webActions";
import {locators} from "../locators/locator";

export class TestUtils {

    static isOnPage = (locator) => {
       WebActions.isExist(locator)
    };

   
static setValue(locator,item){
WebActions.setValue(locator, item)
         
}


static assertArrayEquals(locator1,locator2){
WebActions.assertArrayEquals(locator1, locator2)
         
}
}
