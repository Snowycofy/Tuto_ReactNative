import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'

const SearchStackNavigator = createStackNavigator({
  Home: { 
    screen: Search
  }
})

export default createAppContainer(SearchStackNavigator)