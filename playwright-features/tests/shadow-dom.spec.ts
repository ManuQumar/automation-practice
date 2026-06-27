import{test,expect, Page,BrowserContext} from'@playwright/test';


test.describe("Shadow dom Test Suite",()=>{
let page:Page;
let context:BrowserContext;
test.beforeAll( async({ browser })=>{
     context       = await browser.newContext();

page= await        context.newPage();
await page.goto("https://letcode.in/shadow");

})
test("should be able to access shadow dom",async()=>{
        await page.locator('#fname').fill('manu');
        await page.locator('my-web-component').click();
await page.keyboard.type('kumar');
await page.keyboard.press('Tab');
await page.keyboard.type('manu@gmail.com')
    await page.pause();
})
})