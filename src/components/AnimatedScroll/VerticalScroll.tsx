import React from 'react';
import {Dimensions, FlatList} from 'react-native';
import {Content} from '../../components';
import {Data} from '../../types';

interface AnimatedScrollProps {
  data: Data[];
  activeIndex: number;
  activeScroll: 'vertical' | 'horizontal';
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setActiveScroll: React.Dispatch<
    React.SetStateAction<'vertical' | 'horizontal'>
  >;
}

export const VerticalScroll = ({
  data,
  activeIndex,
  activeScroll,
  setActiveIndex,
  setActiveScroll,
}: AnimatedScrollProps) => {
  const ref = React.useRef<FlatList>(null);

  React.useEffect(() => {
    if (activeScroll === 'horizontal') {
      ref.current?.scrollToIndex({
        index: activeIndex,
        animated: true,
      });
    }
  }, [activeScroll, activeIndex]);

  return (
    <FlatList
      ref={ref}
      data={data}
      initialScrollIndex={activeIndex}
      showsVerticalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={Dimensions.get('window').height}
      onResponderMove={_event => {
        setActiveScroll('vertical');
      }}
      onScroll={event => {
        const index = Math.abs(
          Math.round(
            event.nativeEvent.contentOffset.y / Dimensions.get('window').height,
          ),
        );
        if (activeScroll === 'vertical') {
          setActiveIndex(index);
        }
      }}
      renderItem={({item}: {item: Data}) => (
        <Content
          title={item.title}
          subtext={item.subtext}
          content={item.content}
        />
      )}
    />
  );
};
