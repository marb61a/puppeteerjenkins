const puppeteer = require('puppeteer');

describe("Smoke Test", () => {
    it("should load website", async () => {
        let browser = await puppeteer.launch({
            headless: true
        });

        let page = await browser.newPage();
        await page.setDefaultTimeout(10000);

        // Using the Testcafe sample site
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.waitForSelector('#main-form');

        await browser.close();
        
    });
});
