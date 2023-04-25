import React, { useLayoutEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealList/MealItem';
import MealsList from '../components/MealList/MealsList';

const MeasOverViewScreens = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  })

  useLayoutEffect(() => {

    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
  
    navigation.setOptions({
      title:categoryTitle,
      headerTitleAlign:'center'
    });
  },[catId, navigation])


  return <MealsList items={displayMeals} navigation={navigation} />  
}

export default MeasOverViewScreens

