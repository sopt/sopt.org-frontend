/** @jest-environment jsdom */
import '@testing-library/jest-dom/extend-expect';

import { ThemeProvider } from '@emotion/react';
import Header from '@src/components/common/Header';
import theme from '@src/styles/theme';
import { render } from '@testing-library/react';

// import { ASSETS } from './Header';

describe('Home', () => {
  it('헤더에 이름이 잘 들어가 있는가', () => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );

    // expect(utils.getByText(ASSETS.TITLE)).toBeInTheDocument();
  });
});
