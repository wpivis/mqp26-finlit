/* eslint-disable no-await-in-loop */
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Demo Studies').locator('div').filter({ hasText: 'MQP Prototype Demo' })
    .getByText('Go to Study')
    .click();

  await page.getByRole('button', { name: 'Next', exact: true }).click();

  // Fill the survey
  // question
  await page.getByTestId('q-current-methods').fill('asdf');
  await page.getByTestId('q-used-apps').fill('asdf');
  await page.getByTestId('q-features').fill('asdf');

  // // Go to the next page
  // await page.getByRole('button', { name: 'Next', exact: true }).click();

  await page.getByTestId('q-confusing').fill('asdf');
  await page.getByTestId('q-missing').fill('asdf');

  // Go to the next page
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  await page.getByTestId('q-feature-satisfaction').fill('asdf');
  await page.getByTestId('q-like-dislike').fill('asdf');
  await page.getByTestId('q-most-frustrating').fill('asdf');
  await page.getByTestId('q-streak-feedback').fill('asdf');
  await page.getByTestId('q-goals-feedback').fill('asdf');
  await page.getByTestId('q-budget-feedback').fill('asdf');
  await page.getByTestId('q-additional-comments').fill('asdf');

  // Go to the next page
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  // Check that the thank you message is displayed
  const endText = await page.getByText('Please wait while your answers are uploaded.');
  await expect(endText).toBeVisible();
});
