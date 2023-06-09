import React from 'react'
import { Pressable, View, Text, StyleSheet, Platform } from 'react-native'

const CategoriesGridTitle = ({title, color, onPress}) => {
  return (
    <View style={styles.gridItem}>
        <Pressable
            onPress={onPress} 
            android_ripple={{color:'#ccc'}} 
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
            <View style={[styles.innerContainer,{backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoriesGridTitle

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden': 'visible'
    },
    buttonPressed:{
        opacity: 0.5
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:8,
        justifyContent:'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize:18
    }
})