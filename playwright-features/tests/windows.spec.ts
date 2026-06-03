import { test, expect, Page, BrowserContext } from '@playwright/test'
//locators

test.describe("Windows Test Suite", () => {
    let page: Page;
    let context: BrowserContext
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/window")
    })

    test("Window handle", async () => {
        const [newpage] = await Promise.all([

            context.waitForEvent('page'),
            page.locator("#home").click()
        ])
        await newpage.waitForLoadState('load');
        expect(newpage.url()).toContain("in/test")
        await page.bringToFront(); // brings the parent page on control
        await page.waitForTimeout(3000);
    })

    test("Multiple window handling", async () => {
        const [page1] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('#multi').click()
        ])
        const page2 = await context.waitForEvent('page');
        // Wait for both to fully load
        await page1.waitForLoadState('load');
        await page2.waitForLoadState('load');

        const openedPages = context.pages();
        console.log(openedPages.length);
        for (const p of openedPages) {
            console.log(await p.title());
        }
        await page1.bringToFront();
        page.on('dialog', async(dialog)=>{
                await dialog.accept();
        })
        await page1.locator("#accept").click();
        await page1.waitForTimeout(3000);
    })
})