const puppeteer = require('puppeteer');

// Using async in a describe block declaration will cause errors
describe("End to End test", () => {
    let browser;
    let page;

    before(async function() {
        let browser = await puppeteer.launch({
            headless: true
        });

        let page = await browser.newPage();
        await page.setDefaultTimeout(10000);        
    });

    after(async function(){
        await browser.close();
    });

    it('should submit form', async function(){
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.waitForSelector('#main-form');
        await page.type('#developer-name', 'Joe');
        await page.click('#tried-test-cafe');
        await page.click('#submit-button');
        await page.waitForSelector('.result-content');
    });

    it('should select a value from the select box', async function(){

    });
    
});
