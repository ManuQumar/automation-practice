import{test,expect,Page, BrowserContext} from '@playwright/test'

    const checkAny= (page:Page)=>page.locator("#yes");

test.describe("Check/Radio box Test Suite",()=>{
let page:Page;
let context:BrowserContext;
test.beforeAll( async({ browser })=>{
     context       = await browser.newContext();

page= await        context.newPage();
await page.goto("https://letcode.in/radio");
})

test("Radio/checkbox Test",async()=>{
    await checkAny(page).check();
    await expect(checkAny(page)).toBeChecked(); 
    await expect(page.locator("#no")).not.toBeChecked();
    await expect(page.locator("#maybe")).toBeDisabled();
    await page.waitForTimeout(3000);
    await page.getByRole('checkbox', { name: 'Remember me'}).uncheck();
    await page.waitForTimeout(3000);
})

})