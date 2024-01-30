import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {Header} from './Header';

afterEach(() => {
  cleanup();
});

const onPressMock = jest.fn();

const mockProps = {
  title: 'Welcome to Emma',
  subtext: 'Take back control of your money',
  goBack: onPressMock,
};

const TestComponent = () => {
  const TestStack = createStackNavigator();
  return (
    <NavigationContainer>
      <TestStack.Navigator>
        <TestStack.Screen
          name="Team"
          children={() => <Header {...mockProps} />}
        />
      </TestStack.Navigator>
    </NavigationContainer>
  );
};

const setup = (overrides = {}) => {
  const props = {...mockProps, ...overrides};
  const utils = render(<TestComponent />);
  return {...utils, props};
};

describe('Header', () => {
  it('Should render a header', async () => {
    const {toJSON} = setup();
    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('Should render all text when title, subtext are given', () => {
    const {queryByText} = setup();

    expect(queryByText('Welcome to Emma')).toBeTruthy();
    expect(queryByText('Take back control of your money')).toBeTruthy();
  });

  it('Should click the back button when pressed', async () => {
    const {getByTestId} = setup();
    fireEvent.press(getByTestId('backButton'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
