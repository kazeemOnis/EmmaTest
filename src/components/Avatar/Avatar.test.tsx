import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {Avatar} from './Avatar';

afterEach(() => {
  cleanup();
});

const onPressMock = jest.fn();

const mockProps = {
  image: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a',
  onPress: onPressMock,
};

const setup = (overrides = {}) => {
  const props = {...mockProps, ...overrides};
  const utils = render(<Avatar {...props} />);
  return {...utils, props};
};

describe('Avatar', () => {
  it('Should render avatar image', async () => {
    const {toJSON} = setup();
    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('Should click on the avatar and press action called', () => {
    const {getByTestId} = setup();
    fireEvent.press(getByTestId('avatar'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('Should not render an avatar if no image is passed', async () => {
    const {queryByTestId, toJSON} = setup({
      image: null,
    });
    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
      expect(queryByTestId('avatar')).toBeNull();
    });
  });
});
