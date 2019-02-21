import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import Test from '../Components/Test'
import News from '../Components/News'

const SearchStackNavigator = createStackNavigator({
  Home: { 
    screen: Search,
    navigationOptions: {
      title: 'Recherche de film'
    }
  },
  DetailDeFilm: { 
    screen: FilmDetail
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Home2: { 
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  DetailDeFilm: { 
    screen: FilmDetail
  }
})

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les Derniers Films',
    },
  },
  DetailDeFilm: {
    screen: FilmDetail,
  }
})

const MoviesTabNavigator = createBottomTabNavigator({
  Test: {
    screen: Test
  },
  Home: { 
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        source = {
          require('../Images/ic_search.png')
        }
        style={styles.icon}/>
      }
    }
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        source = {
          require('../Images/ic_favorite.png')
        }
        style={styles.icon}/>
      }
    }
  },
  News: {
    screen: NewsStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Images/ic_fiber_new.png')}
          style={styles.icon}/>
      }
    }
  }
},
{
  tabBarOptions: {
  activeBackgroundColor: '#DDDDDD',
  inactiveBackgroundColor: '#FFFFFF',
  showLabel: false,
  showIcon: true
  }
}
)


const styles = StyleSheet.create({
  icon: {
    width:30,
    height:30
  }
})

export default createAppContainer(MoviesTabNavigator)