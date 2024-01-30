/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from '../../theme';
import {Avatar} from '../../components';
import {OnboardingStackParamList} from '../../navigation/OnboardingNavigator/OnboardingNavigator';
import {Data} from '../../types';
interface HorizontalScrollProps {
  data: Data[];
  dataType: 'team' | 'investor' | 'bank';
  activeIndex: number;
  imageWidth?: number;
  activeScroll: 'vertical' | 'horizontal';
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setActiveScroll: React.Dispatch<
    React.SetStateAction<'vertical' | 'horizontal'>
  >;
}

const Separator = styled.View`
  width: 16px;
`;

export const HorizontalScroll = ({
  data,
  activeIndex,
  imageWidth,
  activeScroll,
  setActiveIndex,
  setActiveScroll,
  dataType,
}: HorizontalScrollProps) => {
  const navigation =
    useNavigation<StackNavigationProp<OnboardingStackParamList>>();
  const ref = React.useRef<FlatList>(null);
  // Default width is 75px, maximum is 150px, minimum width is 50px;
  const width =
    imageWidth && imageWidth <= 150 && imageWidth >= 50 ? imageWidth : 75;

  React.useEffect(() => {
    if (activeScroll === 'vertical') {
      ref.current?.scrollToIndex({
        index: activeIndex,
        animated: true,
        viewPosition: 0.5,
      });
    }
  }, [activeScroll, activeIndex]);

  return (
    <FlatList
      ref={ref}
      initialScrollIndex={activeIndex}
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 120}}
      onResponderMove={_event => {
        setActiveScroll('horizontal');
      }}
      onScroll={event => {
        const index = Math.abs(
          Math.round(event.nativeEvent.contentOffset.x / (width + 16)),
        );
        if (
          index >= 0 &&
          index < data.length &&
          activeScroll === 'horizontal'
        ) {
          setActiveIndex(index);
        }
      }}
      renderItem={({item, index}: {item: Data; index: number}) => (
        <Avatar
          image={item.image}
          imageWidth={imageWidth}
          active={activeIndex === index}
          onPress={() =>
            navigation.navigate('Details', {id: item.id, type: dataType})
          }
        />
      )}
      ItemSeparatorComponent={Separator}
    />
  );
};
