import React, { useContext, useLayoutEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
// import { useDispatch, useSelector } from 'react-redux';
import { FavoritesContext } from '../store/context/favorites-context';
// import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailScreens = ({ route, navigation }) => {
    const favoritesMealsCtx = useContext(FavoritesContext);

    // const favoritesMealsIds = useSelector((state) => state.favoriteMeals.ids);
    // const dispatch = useDispatch();

    const mealId = route.params.MealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoritesMealsCtx.ids.includes(mealId);
    // const mealIsFavorite = favoritesMealsIds.includes(mealId);

    const changeFavoritesStatusHandler = () => {
        if(mealIsFavorite){
            favoritesMealsCtx.removeFavorite(mealId)
            // dispatch(removeFavorite({id:mealId}))
        }else{
            favoritesMealsCtx.addFavorite(mealId)
            // dispatch(addFavorite({id:mealId}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight:()=>{
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color='white' onPress={changeFavoritesStatusHandler} />;
            }
        })
    },[navigation,selectedMeal,changeFavoritesStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri:selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail textStyle={styles.mealDetail} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} duration={selectedMeal.duration} />
        <View style={styles.outerListConatiner}>
        <View style={styles.listContainer}>
        <SubTitle subTitle={'Ingredients'} />
        <List data={selectedMeal.ingredients}/>
        <SubTitle subTitle={'steps'} />
        <List data={selectedMeal.steps}/>
        </View>
        </View>
    </ScrollView>
  )
}

export default MealDetailScreens

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image:{
        width:'100%',
        height:300
    },
    title:{
        fontWeight:'bold',
        fontSize: 24,
        margin: 8,
        textAlign:'center',
        color:'white'
    },
    mealDetail:{
        color:'white'
    },
    listContainer:{
        width:'80%',
    },
    outerListConatiner:{
        justifyContent:'center',
        alignItems:'center'
    }
})