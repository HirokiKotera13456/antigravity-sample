import { test, expect } from '@playwright/test';

test.describe('Cafe Eternity Homepage', () => {
  test('should load the homepage and show the brand name', async ({ page }) => {
    await page.goto('/');
    
    // Check brand name in Navbar (logo)
    await expect(page.getByRole('link', { name: 'Eternity', exact: true }).first()).toBeVisible();
    
    // Check main catchphrase
    await expect(page.locator('text=余白を、 味わう。')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Click on Concept link
    await page.click('text=コンセプト');
    await expect(page).toHaveURL(/.*#concept/);
    
    // Click on Menu link
    await page.click('text=メニュー');
    await expect(page).toHaveURL(/.*#menu/);
  });

  test('should show tasting notes on menu hover', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to menu section
    const menuSection = page.locator('#menu');
    await menuSection.scrollIntoViewIfNeeded();
    
    // Hover over a menu item (e.g., Pour Over)
    const menuItem = page.locator('text=プアオーバー');
    await menuItem.hover();
    
    // Check if tasting notes are visible for the hovered item
    await expect(page.locator('text=味わい:').first()).toBeVisible();
  });
});
