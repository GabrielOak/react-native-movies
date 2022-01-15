import React from 'react';
import { Animated, Dimensions, Image, StyleSheet } from 'react-native';
import { Poster } from './styles';

interface MovieItemProps {
  x: Animated.Value;
  index: number;
  imagePath: any;
  big?: boolean;
}

const MovieItem: React.FC<MovieItemProps> = ({
  imagePath, big=false, x, index,
}) => {
  const imageUrl = 'https://image.tmdb.org/t/p/original';
  const { width } = Dimensions.get("window");

  const posterWidth = (big ? 190 : 120) + 10;

  const position = Animated.subtract(index * posterWidth, x);
  const isDisappearing = -posterWidth;
  const isTop = 0;
  const isBottom = width - posterWidth;
  const isAppearing = width;

  const translateX = Animated.add(
    Animated.add(
      x,
      x.interpolate({
        inputRange: [0, 0.00001 + index * posterWidth],
        outputRange: [0, -index * posterWidth],
        extrapolateRight: "clamp",
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -posterWidth / 4],
      extrapolate: "clamp",
    })
  );
  
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });

  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });
  
  return(
    <Animated.View
      style={{ opacity, transform : [{ translateX }, { scale }] }}
    >
      <Poster
        source={{uri: `${imageUrl}${imagePath}`}}
        big={big}
      />
    </Animated.View>
  );
}
export default MovieItem;
