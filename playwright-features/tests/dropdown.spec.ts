import{test,expect,Page} from '@playwright/test'

    const fruitsDropdown=(page:Page)=>page.locator("#fruits");
    
    const superHeros=(page:Page)=> page.locator("#superheros");

    const progLangDropdown=(page:Page)=>page.locator("#lang option");//"Inside the dropdown #lang, find all option elements."



test.describe("Dropdown Test Suite",()=>{

test.beforeEach(async({page})=>{
await page.goto("https://letcode.in/dropdowns");
})

test("Select value from simple dropdown",async({page})=>{
        await fruitsDropdown(page).selectOption("0");
          const msgValue=      await page.locator("//select[@id='fruits']/following::p[@class='subtitle'][1]").textContent();     
         expect(msgValue).toContain("Apple");
          await page.waitForTimeout(2000); 
})

test("Select value from multiple dropdown",async({page})=>{
        await superHeros(page).selectOption([{label:"Thor"}, {value:'bt'}, {index:1}]);// select multiple values using label, value or index
        await page.waitForTimeout(10000); 
})
/* await page.locator('.dropdown').click();
await page.locator('li').filter({ hasText: 'value' }).click(); // use when select class is not there */

test("Count of the select", async({page})=>{
     const value=   await progLangDropdown(page).count();
     console.log(value);
    expect(value).toBe(5);
})

test("Get the selected value", async({page})=>{
             const selectedText = await page
    .locator("#country option:checked")
    .textContent();
  console.log(selectedText);
})

})