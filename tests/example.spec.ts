import { test, expect } from '@playwright/test';

[...new Array(20)].forEach((_, index) => {
test(`is red #${index}`, async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('test')).toHaveClass( 'red');
});
})