import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

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

export default createAppContainer(SearchStackNavigator)