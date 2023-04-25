import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

const MealsList = ({items, navigation}) => {
    const renderMealItem = (itemData) => {
        const item = itemData.item;
        const onPressHandler = () => {
          navigation.navigate('MealDetailScreen', {
            MealId: item.id,
          });
        }
        const mealItemProps = {
          title: item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
          onPress: onPressHandler
        }
        return <MealItem {...mealItemProps} />
      }
    
      return (
        <View style={styles.constainer}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              renderItem={renderMealItem}
              showsVerticalScrollIndicator={false}
            />
        </View>
      )
}

export default MealsList

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        padding:16
    }
})