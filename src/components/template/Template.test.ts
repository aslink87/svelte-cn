import { render, screen, cleanup } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Template from './Template.svelte';

afterEach(() => cleanup());

async function renderTemplate() {
  const section = render(Template);

  await new Promise(setImmediate);

  return section;
}

test('should render Template section', async () => {
  await renderTemplate();

  expect(screen.getByText('hello')).toBeInTheDocument();
});
