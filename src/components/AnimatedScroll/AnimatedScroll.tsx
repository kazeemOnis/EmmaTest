import React from 'react';
import styled from '../../theme';
import {HorizontalScroll} from './HorizontalScroll';
import {VerticalScroll} from './VerticalScroll';

interface AnimatedScrollProps {
  data: any[];
  imageWidth?: number;
}

const Wrapper = styled.View`
  padding-vertical: 24px;
`;

export const AnimatedScroll = ({data, imageWidth}: AnimatedScrollProps) => {
  const [index, setActiveIndex] = React.useState(0);
  const [activeScroll, setActiveScroll] = React.useState<
    'vertical' | 'horizontal'
  >('horizontal');

  return (
    <React.Fragment>
      <Wrapper>
        <HorizontalScroll
          data={data}
          activeIndex={index}
          activeScroll={activeScroll}
          setActiveIndex={setActiveIndex}
          setActiveScroll={setActiveScroll}
          imageWidth={imageWidth}
        />
      </Wrapper>
      <VerticalScroll
        data={data}
        activeIndex={index}
        activeScroll={activeScroll}
        setActiveIndex={setActiveIndex}
        setActiveScroll={setActiveScroll}
      />
    </React.Fragment>
  );
};
