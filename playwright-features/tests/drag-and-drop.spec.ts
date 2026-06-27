import { test, expect, Page } from '@playwright/test'

test.describe("Drag and Drop Test Suite", () => {
    let page: Page;

    test.beforeEach(async ({ page: testPage }) => {
        page = testPage;
        await page.goto("https://www.qa-practice.com/elements/dragndrop/boxes");
        await page.waitForLoadState('networkidle');
    });

    // Method 1: Using dragTo() — simplest approach
    test("Drag and Drop - dragTo method", async () => {
        const source = page.locator("#rect-draggable");
        const target = page.locator("#rect-droppable");

        await source.dragTo(target);

        await expect(page.getByText("Dropped!")).toBeVisible();
    });

    // Method 2: Using boundingBox + mouse actions — manual coordinates
    test("Drag and Drop - boundingBox method", async () => {
        const source = page.locator("#rect-draggable");
        const target = page.locator("#rect-droppable");

        const sourceBox = await source.boundingBox();
        const targetBox = await target.boundingBox();

        if (sourceBox && targetBox) {
            await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
            await page.mouse.down();
            await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2, { steps: 10 });
            await page.mouse.up();
        } else {
            throw new Error("Bounding box not found for source or target");
        }

        await expect(page.getByText("Dropped!")).toBeVisible();
    });

    // Method 3: Using hover + mouse down/up — simplest manual approach
    test("Drag and Drop - hover method", async () => {
        const source = page.locator("#rect-draggable");
        const target = page.locator("#rect-droppable");

        await source.hover();
        await page.mouse.down();
        await target.hover({ force: true });
        await page.mouse.up();

        await expect(page.getByText("Dropped!")).toBeVisible();
    });
});
