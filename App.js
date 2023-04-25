import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux';

import CategoriesScreens from './screens/CategoriesScreens';
import MeasOverViewScreens from './screens/MeasOverViewScreens';
import MealDetailScreens from './screens/MealDetailScreens';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';
// import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigater = () => {
  return <Drawer.Navigator screenOptions={{
    headerStyle:{backgroundColor:'#351401'},
    headerTintColor:'white',
    sceneContainerStyle:{backgroundColor:'#3f2f25'},
    drawerContentStyle:{backgroundColor: '#351401'},
    drawerInactiveTintColor:'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor:'#e4baa1'
}}>
      <Drawer.Screen name='Categories' component={CategoriesScreens} options={{
        headerTitleAlign:'center',
        title:'All Categories',
        drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size}/>
      }} />
      <Drawer.Screen name='favorites' component={FavoritesScreen} options={{
        headerTitleAlign:'center',
        drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
      }}/>
  </Drawer.Navigator>
}

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
      {/* <Provider store={store}> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                headerStyle:{backgroundColor:'#351401'},
                headerTintColor:'white',
                contentStyle:{backgroundColor:'#3f2f25'}
        }}>
          <Stack.Screen name='MealCategories' 
              options={{
                headerShown: false
              }} 
              component={DrawerNavigater} />
          <Stack.Screen name='MealOverView' options={{animation:'slide_from_right'}} component={MeasOverViewScreens}/>
           <Stack.Screen 
              name='MealDetailScreen'
              component={MealDetailScreens}
              options={{
                animation:'slide_from_bottom'
              }}
               />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </Provider> */}
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
