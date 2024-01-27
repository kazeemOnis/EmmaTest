import React from 'react';
import styled from '../../theme';
import {Header} from '../../components';
import {Container} from '../../styles';

const Wrapper = styled.ScrollView`
  padding-horizontal: 20px;
`;

export const BanksScreen: React.FC = () => {
  return (
    <Container>
      <Wrapper showsVerticalScrollIndicator={false}>
        <Header />
      </Wrapper>
    </Container>
  );
};
