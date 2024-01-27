import React from 'react';
import {Dimensions} from 'react-native';
import styled from '../../theme';
import {colors} from '../../styles';

interface OptionProps {
  text: string;
  onPress: Function;
  icon?: JSX.Element;
}

const OptionWrapper = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  padding: 12px;
  min-height: 140px;
  border-radius: 12px;
  width: ${Dimensions.get('window').width / 2 - 24}px;
`;

const Text = styled.Text`
  font-family: 'Nunito';
  color: white;
  font-size: 18px;
  width: 60%;
`;

const IconWrapper = styled.View`
  background-color: ${colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const OptionSelector = ({text, icon, onPress}: OptionProps) => {
  return (
    <OptionWrapper onPress={() => onPress()}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Text numberOfLines={2}>{text}</Text>
    </OptionWrapper>
  );
};
