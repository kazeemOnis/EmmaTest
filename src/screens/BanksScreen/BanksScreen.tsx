import React from 'react';
import styled from '../../theme';
import {Header, AnimatedScroll} from '../../components';
import {Container} from '../../styles';
import {banks} from '../../utils';

const Wrapper = styled.View`
  padding-horizontal: 20px;
  flex: 1;
`;

export const BanksScreen: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <AnimatedScroll data={banks} imageWidth={50} />
      </Wrapper>
    </Container>
  );
};
