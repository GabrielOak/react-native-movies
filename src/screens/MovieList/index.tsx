import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieItem from '../../components/MovieItem';
import api from '../../service';
import { Container, HeaderContainer, Title } from './styles';

const MovieList: React.FC = () => {
  const [populaMovies, setPopularMovies] = useState([]);
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
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0}}
          data={populaMovies}
          ItemSeparatorComponent={
            () => <View style={{ width: 10 }}/>
          }
          keyExtractor={( item : any) => `${item.id}`}
          renderItem={({ item } : any) => <MovieItem imagePath={item.poster_path} big/>}
        />
        <HeaderContainer>
          <Title>Now Playing</Title>
        </HeaderContainer>
        <FlatList
          horizontal
          style={{ flexGrow: 0}}
          showsHorizontalScrollIndicator={false}
          data={nowPlaying}
          ItemSeparatorComponent={
            () => <View style={{ width: 10 }}/>
          }
          keyExtractor={( item : any) => `${item.id}`}
          renderItem={({ item } : any) => <MovieItem imagePath={item.poster_path}/>}
        />
        <HeaderContainer>
          <Title>Top Rated</Title>
        </HeaderContainer>
        <FlatList
          horizontal
          style={{ flexGrow: 0, marginBottom: 8 }}
          showsHorizontalScrollIndicator={false}
          data={topRatedMovies}
          ItemSeparatorComponent={
            () => <View style={{ width: 10 }}/>
          }
          keyExtractor={( item : any) => `${item.id}`}
          renderItem={({ item } : any) => <MovieItem imagePath={item.poster_path}/>}
        />
      </Container>
    </SafeAreaView>

  );
}
export default React.memo(MovieList);
