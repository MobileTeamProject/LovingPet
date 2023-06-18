import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreenRoute } from './routes';
import HomeScreen from '../screens/photos/HomeScreen';
import ListScreen from '../screens/photos/ListScreen';
import MapScreen from '../screens/photos/MapScreen';
import ProfileScreen from '../screens/authenticate/ProfileScreen';
import { WHITE } from '../colors';

const Stack = createNativeStackNavigator();

const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        title: '',
      }}
    >
      <Stack.Screen
        name={HomeScreenRoute.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={HomeScreenRoute.LIST} component={ListScreen} />
      <Stack.Screen name={HomeScreenRoute.MAP} component={MapScreen} />
      <Stack.Screen name={HomeScreenRoute.MYPAGE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigation;
