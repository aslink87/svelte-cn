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

test('newsletter page has correct title', async ({ page }) => {
  await page.goto('/newsletter');
  const title = await page.title();

  expect(title).toBe('CN - Newsletter');
});

test('calendar page has correct title', async ({ page }) => {
  await page.goto('/calendar');
  const title = await page.title();

  expect(title).toBe('CN - Calendar');
});

test('services page has correct title', async ({ page }) => {
  await page.goto('/services');
  const title = await page.title();

  expect(title).toBe('CN - Services');
});

test('donate page has correct title', async ({ page }) => {
  await page.goto('/donate');
  const title = await page.title();

  expect(title).toBe('CN - Donate');
});

test('church partners page has correct title', async ({ page }) => {
  await page.goto('/churches');
  const title = await page.title();

  expect(title).toBe('CN - Churches');
});

test('blog page has correct title', async ({ page }) => {
  await page.goto('/blog');
  const title = await page.title();

  expect(title).toBe('CN - Blog');
});
