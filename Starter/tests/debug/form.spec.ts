import { test, expect } from '@playwright/test'

test('Name field value', async ({ page }) => {
    await page.goto('FeedBackForm.html');
    
    const nameField = page.getByRole('textbox', { name: 'name' })   

    await nameField.fill('Alex')
    console.log('Filling the name field')

    await page.keyboard.press('A')
    console.log('Does typing break the test?')

    await expect(nameField).toHaveValue('Alex', {
        timeout: 100
    })
})