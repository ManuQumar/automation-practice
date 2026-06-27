import{test,expect, Page,BrowserContext} from'@playwright/test';


test.describe("File Upload Test Suite",()=>{

    test("Upload Files from framework Level", async({page})=>{
        await page.goto("https://letcode.in/file");
       await page.setInputFiles('.file-input', "./playwright-features/playwright-report/index.html");
// to sent multiple files in second parameter ["",""] mention in array
        await page.pause();
    })

    test("upload files using file manager", async({page})=>{

        await page.goto("https://the-internet.herokuapp.com/upload");
        
        const [filechoose] = await Promise.all([
            page.waitForEvent('filechooser'),
                page.locator('#drag-drop-upload').click()
        ])
     await   filechoose.setFiles("C:/PracticeTesting/automation-practice/playwright-features/playwright-report/index.html");
     await page.pause();
    })
})