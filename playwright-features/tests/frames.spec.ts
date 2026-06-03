import{test, expect,Page} from '@playwright/test'

const frame1=(page:Page)=> page.frameLocator("#firstFr");
const frame2=(page:Page)=> page.frameLocator("#firstFr").frameLocator("[src=innerframe]");

test.describe("Frames Test Suite", ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://letcode.in/frame")
    })

    test("Singal Frame", async ({page})=>{
    // const frame1=  page.frameLocator('#firstFr');
   await frame1(page).locator("[name=fname]").fill("Manohar");
   await frame1(page).locator("[name=lname]").fill("N");
     await page.waitForTimeout(3000)
   
    })
    test("Nested Frame", async ({page})=>{
       await     frame2(page).getByPlaceholder("Enter email").fill("manohar@gmail.com");
        await page.waitForTimeout(3000)
        })
    
})