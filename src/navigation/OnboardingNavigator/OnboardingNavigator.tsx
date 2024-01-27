import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LandingScreen} from '../../screens/LandingScreen/LandingScreen';
import {BanksScreen} from '../../screens/BanksScreen/BanksScreen';
import {InvestorsScreen} from '../../screens/InvestorsScreen/InvestorsScreen';
import {TeamScreen} from '../../screens/TeamScreen/TeamScreen';

export type OnboardingStackParamList = {
  Landing: undefined;
  Team: undefined;
  Investors: undefined;
  Banks: undefined;
};

const OnboardingStackNavigator =
  createStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator = () => {
  return (
    <OnboardingStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStackNavigator.Screen
        name="Landing"
        component={LandingScreen}
      />
      <OnboardingStackNavigator.Screen
        name="Investors"
        component={InvestorsScreen}
      />
      <OnboardingStackNavigator.Screen name="Team" component={TeamScreen} />
      <OnboardingStackNavigator.Screen name="Banks" component={BanksScreen} />
    </OnboardingStackNavigator.Navigator>
  );
};
