export class WebActions {
     // Actions
    static init = () => {
        log.info('web init');
        web.init();
    };

    static open = (url) => {
        log.info(`web init open ${url}`);
        web.open(url);
    };

    static click = (locator) => {
        log.info(locator);
        log.info('waitForInteractable: ', locator);
        web.waitForInteractable(locator,6000);
        log.info('clicking on button: ', locator);
        web.click(locator);
                log.info(' on : ');

    };

    static doubleClick = (locator) => {
        log.info('double click on button: ', locator);
        web.doubleClick(locator);
    };

    static setValue = (locator, value) => {
        log.info(locator)
        log.info('set value: ', value, " into element: ", locator);
        web.type(locator, value);
    };

    static selectValue = (locator, value) => {
        log.info(`select selector value ${locator} = ${value}`);
        web.select(locator, value);
    };

    static clear = (locator) => {
        log.info(`clear data from element: ${locator}`);
        web.clear(locator);
    }

    static setCheckbox = (locator, toChecked) => {

        const isChecked = web.isChecked(locator);

        if (isChecked === toChecked) {
            log.debug(`${locator} checkbox already in the asked state`);
            this.assertValue(locator, !isChecked);
            return;
        }

        log.info(`set checkbox value ${locator} = ${toChecked}`);
        web.click(locator);
    };

    static transaction = (text) => {
        log.info(`transaction ${text}`);
        web.transaction(text);
    };

    static makeVisible = (locator) => {
        log.info(`making ${locator} element visible`)
        web.makeVisible(locator);
    }

    static selectFrame = (locator) => {
        log.info(`Select frame ${locator}`);
        web.selectFrame(locator);
    }

    static selectWindow = (locator) => {
        log.info(`Select window ${locator}`);
        web.selectWindow(locator);
    }

    static sendKeys = (keysArr) => {
        log.info(`Send keys ${keysArr}`);
        web.sendKeys(keysArr)
    }


    // Asserts
    static type = (locator, value) => {
        log.info(`type ${locator} ${value}`);
        web.type(locator, value);
    };

    static assertTitle = (textToAssert) => {
        log.info(`Assert Title ${textToAssert}`);
        web.assertTitle(textToAssert)
    };

    static assertValue = (locator, value) => {
        log.info(`Assert value ${locator} ${value}`);
        web.assertValue(locator, value);
    };

    static assertTextPresent = (text, time) => {
        log.info(`Assert Text Present ${text} ${time}`);
         web.assertTextPresent(text, time);
    };

    static isExist = (locator) => {
        log.info(`Is exist ${locator}`);
        web.isExist(locator);
    };

    static waitForInteractable = (locator) => {
        log.info('waiting for element ', locator, " to be interactable");
        web.waitForInteractable(locator)
    };

    static waitForVisible = (locator, time) => {
        log.info(`waitForVisible ${locator}`);
        web.waitForVisible(locator, time);
    }

    static waitForExist = (locator, time) => {
        log.info(`waitForExist ${locator}`);
        web.waitForExist(locator, time);
    }

    static waitForWindow = (locator, time) => {
        log.info(`waitForWindow ${locator}`);
        web.waitForWindow(locator, time);
    }

  
    // Utils
    static getAttribute = (locator, attribute) => {
        log.info(`getAttribute ${locator} = ${attribute}`);
        return web.getAttribute(locator, attribute);
    };

    static isVisible = (locator) => {
        log.info(`check if locator is visible ${isVisible}`);
        web.isVisible(locator);
    };

    static setTimeout = (time) => {
        log.info(`setTimeout ${time}`);
        web.setTimeout(time)
    }
}