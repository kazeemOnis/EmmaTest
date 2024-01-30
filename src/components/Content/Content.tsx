import React from 'react';
import {Dimensions} from 'react-native';
import styled from '../../theme';

interface ContentProps {
  title?: string;
  subtext?: string;
  content?: string;
}

const Wrapper = styled.View`
  flex: 1;
  height: ${Dimensions.get('window').height}px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: 'Nunito'
  color: white;
  text-align: center;
  margin-bottom: 4px;
`;

const Subtext = styled.Text`
  font-family: 'Nunito';
  color: white;
  text-align: center;
  font-size: 16px;
`;

const ContentText = styled.Text`
  font-family: 'Nunito';
  color: white;
  font-size: 14px;
  margin-top: 16px;
`;

export const Content = ({title, subtext, content}: ContentProps) => {
  return (
    <Wrapper>
      {title && <Title testID="contentTitle">{title}</Title>}
      {subtext && <Subtext testID="contentSubtext">{subtext}</Subtext>}
      {content && <ContentText testID="contentContent">{content}</ContentText>}
    </Wrapper>
  );
};
