import{test,expect, Page,BrowserContext} from'@playwright/test';
const userNameFiled= (page:Page)=> page.locator("//p[@class='control is-expanded']//input");

test.describe("Simple Elements Test Suite",()=>{
let page:Page;
let context:BrowserContext;
test.beforeAll( async({ browser })=>{
     context       = await browser.newContext();

page= await        context.newPage();
await page.goto("https://letcode.in/elements");
})

test("Search git user name", async ()=>{
     
        await userNameFiled(page).fill("ManuQumar");
        
        await page.locator("#search").click();
   //     userNameFiled(page).press("Enter");
})
test("Get list of git projects", async()=>{
       await page.locator(".box.ng-star-inserted").first().waitFor();
    const projectsList= await page.locator(".box.ng-star-inserted").allTextContents();
   console.log(projectsList);
   })
})
