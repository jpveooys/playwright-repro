import { test, expect } from '@playwright/test';

test.describe('@setA', () => {
  test(`test a`,  async ({ page }) => {
    await page.goto('/')
    expect(true).toBeTruthy();
  });
})
