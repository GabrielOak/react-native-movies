import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedFlatList from '../../components/AnimatedFlatList';
import MovieItem from '../../components/MovieItem';
import api from '../../service';
import { Container, HeaderContainer, Title } from './styles';

const MovieList: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const getPopularMovies = async() => {
    await api.get('movie/popular?page=1')
    .then((response) => {
      setPopularMovies(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const getLatestsMovies = async() => {
    await api.get('movie/top_rated?page=1')
    .then((response) => {
      setTopRatedMovies(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const getNowPlayingMovies = async() => {
    await api.get('movie/now_playing?page=1')
    .then((response) => {
      setNowPlaying(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    getPopularMovies();
    getLatestsMovies();
    getNowPlayingMovies();
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <Container>
        <HeaderContainer>
          <Title>Popular Movies</Title>
        </HeaderContainer>
        <AnimatedFlatList items={popularMovies} big/>
        <HeaderContainer>
          <Title>Now Playing</Title>
        </HeaderContainer>
        <AnimatedFlatList items={nowPlaying} />
        <HeaderContainer>
          <Title>Top Rated</Title>
        </HeaderContainer>
        <AnimatedFlatList items={topRatedMovies} />
      </Container>
    </SafeAreaView>

  );
}
export default React.memo(MovieList);
