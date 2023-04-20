import { expect, test } from '@playwright/test';

test('index page has nav bar element', async ({ page }) => {
  await page.goto('/');
  const title = await page.title();

  expect(title).toBe('Christian Neighbors');
  expect(await page.textContent('h1')).toBe('Christian');
});

test('about page has correct title', async ({ page }) => {
  await page.goto('/about');
  const title = await page.title();

  expect(title).toBe('CN - About');
});

test('admin page to redirect to home', async ({ page }) => {
  await page.goto('/admin');
  const title = await page.title();

  expect(title).toBe('Christian Neighbors');
});

test('faq page has correct title', async ({ page }) => {
  await page.goto('/faq');
  const title = await page.title();

  expect(title).toBe('CN - Faq');
});
