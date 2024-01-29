import React from 'react';
import styled from '../../theme';
import {Header, AnimatedScroll} from '../../components';
import {Container} from '../../styles';
import {investors} from '../../utils';

const Wrapper = styled.View`
  padding-horizontal: 20px;
  flex: 1;
`;

export const InvestorsScreen: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <AnimatedScroll data={investors} />
      </Wrapper>
    </Container>
  );
};
