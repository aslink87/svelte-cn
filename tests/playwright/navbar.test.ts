import { expect, test } from '@playwright/test';

test('navbar dropdown links navigate to correct pages', async ({ page }) => {
  await page.goto('/');

  // const aboutDropdownDiv = await page.getByTestId('dropdown-About');

  // expect(aboutDropdownDiv).toBeVisible();

  // await aboutDropdownDiv.evaluate((el) => el.removeAttribute('hidden'));
  // await aboutDropdownDiv.evaluate((el) => console.log('here'));
  // expect(aboutDropdownDiv).toBeVisible();
  // const newsletterLink = await page.getByRole('link', { name: 'Newsletter' }).all();
  // // await newsletterLink.click();
  //
  // console.log(newsletterLink);
  const title = await page.title();
  //
  expect(title).toBe('Christian Neighbors');
});
