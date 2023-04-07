import { render, screen, cleanup } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Hero from './Hero.svelte';

afterEach(() => cleanup());

async function renderHero() {
  const section = render(Hero);

  await new Promise(setImmediate);

  return section;
}

test('should render Hero section', async () => {
  await renderHero();

  expect(screen.getByText('hello')).toBeInTheDocument();
});
