import { render, screen, cleanup, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import HomeLower from './Home_Lower.svelte';

afterEach(() => cleanup());

async function renderHomeLower() {
  const section = render(HomeLower);

  await new Promise(setImmediate);

  return section;
}

test('home lower section should render', async () => {
  await renderHomeLower();

  const subHeading = screen.queryAllByText('Support Us')[0];
  expect(subHeading).toBeInTheDocument();
});

test('home lower section buttons should change displayed content', async () => {
  await renderHomeLower();

  const contactButton = screen.queryByText('Contact Us');

  await fireEvent.click(contactButton as HTMLButtonElement);

  const subHeading = screen.getByRole('heading');
  expect(subHeading).toHaveTextContent('Directory');
});
