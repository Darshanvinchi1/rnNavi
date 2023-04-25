import React from 'react'
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoriesGridTitle from '../components/CategoriesGridTitle';



const CategoriesScreens = ({ navigation }) => {
  const renderCategoriesItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealOverView', {
        categoryId: itemData.item.id
      });
    }
    return <CategoriesGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
  }
  return (
    <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoriesItem} 
        numColumns={2}    
    />
  )
}

export default CategoriesScreens
