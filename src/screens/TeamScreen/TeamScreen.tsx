import React from 'react';
import styled from '../../theme';
import {AnimatedScroll, Header} from '../../components';
import {Container} from '../../styles';
import {team} from '../../utils';

const Wrapper = styled.View`
  padding-horizontal: 20px;
  flex: 1;
`;

export const TeamScreen: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <AnimatedScroll data={team} dataType="team" />
      </Wrapper>
    </Container>
  );
};
