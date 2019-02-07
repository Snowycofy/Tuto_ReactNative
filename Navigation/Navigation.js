import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
  Home: { 
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  DetailDeFilm: { 
    screen: FilmDetail
  }
})

const MoviesTabNavigator = createBottomTabNavigator({
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
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        source = {
          require('../Images/ic_favorite.png')
        }
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