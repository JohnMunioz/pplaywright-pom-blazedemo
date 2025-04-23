import { test, expect } from '@playwright/test';

test('test for BlazeDemo', async ({ page }) => {
  await page.goto('https://www.blazedemo.com/');
  await page.locator('select[name="fromPort"]').selectOption('Paris');
  await page.locator('select[name="toPort"]').selectOption('Buenos Aires');
  await page.locator('input[type="submit"]').click();
  await page.locator('//tr[1]/td[1]/input').click();
  await page.locator('input[@id="inputName"]').fill('Andrew Jones');
  await page.locator('input[@id="address"]').fill('123 street');
  await page.locator('input[@id="city"]').fill('Any');
  await page.locator('input[@id="state"]').fill('State');
  await page.locator('input[@id="zipCode"]').fill('1234');
  await page.locator('#cardType').selectOption('amex');
  await page.locator('input[@id="creditCardNumber"]').fill('123456789123');
  await page.locator('input[@id="creditCardMonth"]').fill('2017');
  await page.locator('input[@id="nameOnCard"]').fill('John Smith');
  await page.getByRole('button', { name: 'Purchase Flight' }).click();
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase' })).toBeVisible();
});