import { test, expect, Page } from '@playwright/test'

//locators

//const simpleAlertBtn= (page:Page)=> page.locator("#accept");

//const confirmAlertBtn= (page:Page)=> page.locator("#confirm");

const promptAltertBtn = (page: Page) => page.locator("#prompt");



test.describe("Alerts Test Suite", () => {

    let page: Page

    test.beforeAll(async ({ browser }) => {
        const browContext = await browser.newContext();
        page = await browContext.newPage();
        await page.goto("https://letcode.in/alert");
    })
    test("handle dailog box", async () => {
        page.on('dialog', async (dialog) => {
            console.log(dialog.message());
            console.log(dialog.defaultValue());
            console.log(dialog.type());
            await dialog.accept('Manu');
        })

        //  await simpleAlertBtn(page).click();

        await promptAltertBtn(page).click();



    })

})