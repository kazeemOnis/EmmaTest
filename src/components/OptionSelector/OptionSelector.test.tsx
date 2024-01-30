import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {OptionSelector} from './OptionSelector';
import {User} from '../Icons';

afterEach(() => {
  cleanup();
});

const onPressMock = jest.fn();

const mockProps = {
  text: 'Contacts',
  onPress: onPressMock,
};

const setup = (overrides = {}) => {
  const props = {...mockProps, ...overrides};
  const utils = render(<OptionSelector {...props} />);
  return {...utils, props};
};

describe('OptionSelector', () => {
  it('Should render content', async () => {
    const {toJSON} = setup();
    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('Should render all text', () => {
    const {queryByText} = setup();

    expect(queryByText('Contacts')).toBeTruthy();
  });

  it('Should render an icon when provided', async () => {
    const {toJSON} = setup({
      icon: <User />,
    });
    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('Should click the option selector when pressed', async () => {
    const {getByTestId} = setup();
    fireEvent.press(getByTestId('optionSelector'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
