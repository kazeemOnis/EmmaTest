import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from '../../theme';
import {OptionSelector, Header} from '../../components';
import {Building, PiggyBank, User} from '../../components/Icons';
import {OnboardingStackParamList} from '../../navigation/OnboardingNavigator/OnboardingNavigator';
import {Container} from '../../styles';
import {Option} from '../../types';

const Wrapper = styled.ScrollView`
  padding-horizontal: 20px;
`;

const ContentWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  flex-wrap: wrap;
  row-gap: 8px;
`;

export const LandingScreen: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<OnboardingStackParamList>>();
  const options: Option[] = [
    {
      text: 'Our Team',
      route: 'Team',
      icon: <User />,
    },
    {
      text: 'Investors',
      route: 'Investors',
      icon: <PiggyBank />,
    },
    {
      text: 'Supported banks',
      route: 'Banks',
      icon: <Building />,
    },
  ];

  return (
    <Container>
      <Wrapper showsVerticalScrollIndicator={false}>
        <Header
          title="Welcome to Kazeem's Emma test."
          subtext="Take a scroll through Emma's team, investors and supported banks 👇🏽"
          hideBack
        />
        <ContentWrapper>
          {options.map((option, index) => (
            <OptionSelector
              onPress={() => navigation.navigate(option.route)}
              text={option.text}
              icon={option.icon}
              key={index}
            />
          ))}
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};
