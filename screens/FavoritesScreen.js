import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealList/MealsList';
// import { useSelector } from 'react-redux';
import AnimatedLottieView from 'lottie-react-native'


const FavoritesScreen = ({navigation}) => {

  // const favoritesMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoritesMealsCtx = useContext(FavoritesContext);

  const favoritesMeals =  MEALS.filter(meal => favoritesMealsCtx.ids.includes(meal.id))
  // const favoritesMeals = MEALS.filter(meal => favoritesMealsIds.includes(meal.id))

  if(favoritesMeals.length === 0){
    return <View style={styles.rootConatainer}>
      {/* <Text style={styles.text}> You have no favorites meal yet.</Text> */}
      <AnimatedLottieView source={require('../assets/empty_list.json')} autoPlay loop />
    </View>
  }

  return (
    <MealsList items={favoritesMeals} navigation={navigation} />
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rootConatainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
})