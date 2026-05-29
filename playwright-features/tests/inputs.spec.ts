import { test, expect, Page } from '@playwright/test';

// Locators
const enterYourFullNameField = (page: Page) =>page.locator('#fullName');

const appendField = (page: Page) =>
  page.locator('#join');

const attributeValueField = (page: Page) =>
  page.locator('#getMe');

const clearTheTextField = (page: Page) =>
  page.locator('#clearMe');

const disabledField=(page:Page)=> page.locator("#noEdit");

test.describe('Input test suite', () => {

  // Runs before every test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://letcode.in/edit');
  });

  test('Enter name in the text field', async ({ page }) => {

    await enterYourFullNameField(page).fill('Manohar');

    await expect(
      enterYourFullNameField(page)
    ).toHaveValue('Manohar');

  });

  test('Append a text and press keyboard tab', async ({ page }) => {

    const input = appendField(page);

    await input.press('End');
    await input.pressSequentially(' Manohar');

    await expect(input)
      .toHaveValue('I am good Manohar');

  });

  test('Get attribute value', async ({ page }) => {

    const value = await attributeValueField(page).getAttribute('value');

    console.log(value);

    expect(value).toEqual('ortonikc');

  });

  test('Clear text in field', async ({ page }) => {

    const clearField = clearTheTextField(page);

    await clearField.clear();

    await expect(clearField)
      .toHaveValue('');

  });

  test("Validate field is disabled", async({page})=>{
    await disabledField(page).isDisabled();
  })


});