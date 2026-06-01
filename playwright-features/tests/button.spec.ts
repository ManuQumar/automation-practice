import { test, expect, Page } from '@playwright/test'
const goToHomeButton = (page: Page) => page.locator("#home");

    const buttonLocation = (page: Page) => page.locator("#position")

    const colorOfButton = (page: Page) => page.locator("#color");

    const sizeOfTheButton = (page: Page) => page.locator("#property")

    const disabledButton = (page: Page) => page.locator("//button[contains(text(),'Disabled')]");

    const holdOnButton = (page: Page) => page.locator("//*[contains(text(),' Button Hold!')]/ancestor::button");

test.describe("Button test suite", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://letcode.in/button");
    })

    test("Click on GoToHomeButton", async ({ page }) => {
        await goToHomeButton(page).click();
    })

    test("Page Navigation commands", async ({ page }) => {
        await page.reload();
        await page.goBack();
        await page.goForward();
    })
    //"Rarely. Most automation relies on locators and assertions. Coordinates are mainly useful for drag-and-drop, canvas interactions, or layout validations
    test("get location of an element", async ({ page }) => {
        const locationvalue = await buttonLocation(page).boundingBox();
        console.log(locationvalue);
    })
    //Playwright doesn't have direct getCssValue().
    test("get color of an element", async ({ page }) => {

        const color = await colorOfButton(page).evaluate((el) => getComputedStyle(el).backgroundColor)
        console.log(color);
    })
    // Playwright there's no getCssValue(). The equivalent is:element.evaluate(el => getComputedStyle(el).width)
    test("get size of an element", async ({ page }) => {
        const size = await sizeOfTheButton(page).boundingBox();
        console.log(size);
        // or
        const size2 = await sizeOfTheButton(page).evaluate(el => getComputedStyle(el).width);
        console.log(size2);

    })

    test("verify button is disabled", async ({ page }) => {
        await expect(disabledButton(page)).toBeDisabled();
    })

    test("hold on button", async ({ page }) => {

        //  await holdOnButton(page).click({delay:3000});
        //or
        await holdOnButton(page).hover();
        await page.mouse.down();
        await page.waitForTimeout(3000); // holding for 3 seconds
        await page.mouse.up();
    })

})