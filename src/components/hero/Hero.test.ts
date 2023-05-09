import { render, screen, cleanup } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Hero from './Hero.svelte';

afterEach(() => cleanup());

async function renderHero() {
  const section = render(Hero, { data: { title: 'test title', link: 'https://www.google.com' } });

  await new Promise(setImmediate);

  return section;
}

test('should render Hero section', async () => {
  await renderHero();

  expect(screen.getByText('Latest News')).toBeInTheDocument();
});

test('link should have correct href', async () => {
  await renderHero();

  const link = screen.getByRole('link');

  expect(link).toHaveAttribute('href', 'https://www.google.com');
});
