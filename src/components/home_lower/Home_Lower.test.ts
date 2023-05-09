import { render, screen, cleanup, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import HomeLower from './Home_Lower.svelte';

afterEach(() => cleanup());

async function renderHomeLower() {
  const section = render(HomeLower);

  await new Promise(setImmediate);

  return section;
}

test('should render Home Lower section', async () => {
  await renderHomeLower();

  expect(screen.getByText('How to Help')).toBeInTheDocument();
});

test('home lower buttons should update displayed content', async () => {
  await renderHomeLower();

  // arrange
  const ids = [0, 1, 2, 3];
  for (let i = 0; i < ids.length; i += 1) {
    if (document.getElementById(`${i}`)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById(`${i}`)!.style.display = 'none';
    }
  }
  const testimoniesDiv = document.getElementById('1');
  const button = screen.getAllByRole('button').find((b) => b.id === '5');

  // act
  if (button) await fireEvent.click(button);

  // assert
  expect(testimoniesDiv).toHaveStyle('display: flex');
});
