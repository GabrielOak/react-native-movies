import React, { useRef } from 'react';
import { Animated, View } from 'react-native';
import MovieItem from '../MovieItem';

interface AnimatedFlatListProps {
  items: Array<any>;
  big?: boolean;
};

const AnimatedFlatList: React.FC<AnimatedFlatListProps> = ({ items, big=false }) => {

  const x = useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: x }}}],
    { useNativeDriver: true },
  );

  return (
    <Animated.FlatList
      horizontal
      scrollEventThrottle={16}
      style={{ flexGrow: 0}}
      bounces={false}
      onScroll={onScroll}
      showsHorizontalScrollIndicator={false}
      data={items}
      ItemSeparatorComponent={
        () => <View style={{ width: 10 }}/>
      }
      keyExtractor={( item : any) => `${item.id}`}
      renderItem={({ item, index } : any) => 
        <MovieItem {...{ imagePath:item.poster_path, big, x, index }}/>}
    />
  )
}

export default AnimatedFlatList;