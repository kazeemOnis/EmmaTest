import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {VerticalScroll} from './VerticalScroll';

afterEach(() => {
  cleanup();
});

const mockSetActiveIndex = jest.fn();
const mockSetActiveScroll = jest.fn();

const mockData = {
  data: [
    {
      id: 1,
      title: 'Kazeem',
      subtext: 'React Native Engineer',
      image: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a',
      content:
        'Experienced React Native Engineer with over 4 years of experience in building and shipping production ready apps to users',
    },
  ],
};

const setup = (overrides = {}) => {
  const props = {...mockData, ...overrides};
  const utils = render(
    <VerticalScroll
      {...props}
      activeIndex={0}
      activeScroll="horizontal"
      setActiveIndex={mockSetActiveIndex}
      setActiveScroll={mockSetActiveScroll}
    />,
  );
  return {...utils, props};
};

describe('Vertical Scroll', () => {
  it('Should render vertical scroll', async () => {
    const {toJSON} = setup();
    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
