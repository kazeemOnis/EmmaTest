import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {Content} from './Content';

afterEach(() => {
  cleanup();
});

const mockProps = {
  title: 'Kazeem',
  subtext: 'React Native Engineer',
  content:
    'Experienced React Native Engineer with over 4 years of experience in building and shipping production ready apps to users',
};

const setup = (overrides = {}) => {
  const props = {...mockProps, ...overrides};
  const utils = render(<Content {...props} />);
  return {...utils, props};
};

describe('Content', () => {
  it('Should render content', async () => {
    const {toJSON} = setup();
    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('Should render all text when title, subtext, content are given', () => {
    const {queryByText} = setup();

    expect(queryByText('Kazeem')).toBeTruthy();
    expect(queryByText('React Native Engineer')).toBeTruthy();
    expect(
      queryByText(
        'Experienced React Native Engineer with over 4 years of experience in building and shipping production ready apps to users',
      ),
    ).toBeTruthy();
  });

  it('Should not render text when title, subtext, content are not given', async () => {
    const {queryByTestId, toJSON} = setup({
      title: '',
      subtext: '',
      content: '',
    });
    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
      expect(queryByTestId('title')).toBeNull();
      expect(queryByTestId('subtext')).toBeNull();
      expect(queryByTestId('content')).toBeNull();
    });
  });
});
