import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IngredientsScreen from './src/Screens/IngredientsScreen';
import RecipeScreen from './src/Screens/RecipeScreen';

const navigator = createStackNavigator(
  {
  Ingredients: {screen : IngredientsScreen, 
    navigationOptions: { title: "Recipes", headerLeft: () => null, headerStyle: { //backgroundColor: ''
    },
    headerTitleStyle: { //color: "" 
    } } },
  Recipe: {screen: RecipeScreen, navigationOptions: {title: "Recipe"}}
  }, 
  {
  initialRouteName: 'Ingredients',
  defaultNavigationOptions: {
    title: 'Recipes'
  }
}
);


export default createAppContainer(navigator);
