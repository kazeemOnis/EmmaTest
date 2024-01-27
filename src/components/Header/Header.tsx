import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from '../../theme';
import {ChevronLeft} from './../Icons';

interface HeaderProps {
  title?: string;
  subtext?: string;
  goBack?: () => void;
  hideBack?: boolean;
}

const Wrapper = styled.View``;

const Text = styled.Text`
  font-size: 28px;
  font-family: 'Nunito'
  color: white;
  margin-bottom: 8px;
`;

const SubText = styled.Text`
  font-family: 'Nunito';
  color: white;
  font-size: 16px;
`;

const BackButtonWrapper = styled.TouchableOpacity``;

export const Header = ({title, subtext, goBack, hideBack}: HeaderProps) => {
  const navigation = useNavigation<any>();

  return (
    <Wrapper>
      {!hideBack && (
        <BackButtonWrapper
          onPress={() => {
            goBack ? goBack() : navigation.goBack();
          }}>
          <ChevronLeft />
        </BackButtonWrapper>
      )}
      {title && <Text>{title}</Text>}
      {subtext && <SubText>{subtext}</SubText>}
    </Wrapper>
  );
};
