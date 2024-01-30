import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingNavigator} from '../OnboardingNavigator/OnboardingNavigator';

const RootStackNavigator = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <RootStackNavigator.Screen
        name="OnboardingNavigator"
        component={OnboardingNavigator}
      />
    </RootStackNavigator.Navigator>
  );
};
