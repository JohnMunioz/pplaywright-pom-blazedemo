import { test } from '@playwright/test';
import { BookingsPage } from '../page/BookingsPage';
import { BasePage } from '../page/basePage';

test('test for BlazeDemo', async ({ page }) => {
    const bookins = new BookingsPage(page);
    const base = new BasePage(page);
    await base.loadWeb('https://blazedemo.com/');
    await bookins.selectDestination();
    await bookins.fillPersonalInfo();
    await bookins.confirmationBooking();
    
});