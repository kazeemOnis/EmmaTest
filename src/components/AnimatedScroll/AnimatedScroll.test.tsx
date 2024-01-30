import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {act} from 'react-test-renderer';
import {AnimatedScroll} from './AnimatedScroll';

afterEach(() => {
  cleanup();
});

const mockData = [
  {
    id: 1,
    title: 'Kazeem',
    subtext: 'React Native Engineer',
    image: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a',
    content:
      'Experienced React Native Engineer with over 4 years of experience in building and shipping production ready apps to users',
  },
];

const TestComponent = () => {
  const TestStack = createStackNavigator();
  return (
    <NavigationContainer>
      <TestStack.Navigator>
        <TestStack.Screen
          name="Team"
          children={() => <AnimatedScroll data={mockData} dataType="team" />}
        />
      </TestStack.Navigator>
    </NavigationContainer>
  );
};

const setup = (overrides = {}) => {
  const props = {...mockData, ...overrides};
  const utils = render(<TestComponent />);
  return {...utils, props};
};

describe('Animated Scroll', () => {
  it('Should render Animated scroll', async () => {
    const {toJSON} = setup();
    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
