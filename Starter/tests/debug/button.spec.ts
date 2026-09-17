import { test, expect } from '@playwright/test'

test('Complex button test - wrong approach', async ({page})=>{
    // less than the needed time, the test fails
    test.setTimeout(3000)

    await page.goto('ComplexButton.html')

    const button = page.locator('button')

    // await button.click()

    const isVisible = await button.isVisible()
    expect.soft(isVisible).toBe(true)

    const isEnabled = await button.isEnabled()
    expect.soft(isEnabled).toBe(true)

    await button.click()

})
