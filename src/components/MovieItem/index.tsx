import React from 'react';
import { Image } from 'react-native';
import { Poster } from './styles';

interface MovieItemProps {
  imagePath: any;
  big?: boolean;
}

const MovieItem: React.FC<MovieItemProps> = ({ imagePath, big=false }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/original';
  return(
    <Poster source={{uri: `${imageUrl}${imagePath}`}} big={big}/>
  );
}
export default MovieItem;
