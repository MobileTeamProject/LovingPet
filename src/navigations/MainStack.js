import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import HeaderLeft from '../components/authenticate/HeaderLeft';
import ImagePickerScreen from '../screens/photos/ImagePickerScreen';
import SelectPhotosScreen from '../screens/photos/SelectPhotosScreen';
import UpdateProfileScreen from '../screens/authenticate/UpdateProfileScreen';
import WriteTextScreen from '../screens/photos/WriteTextScreen';
import ContentTab from './ContentTab';
import { MainRoutes } from './routes';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        title: '',
        headerLeft: HeaderLeft,
      }}
    >
      <Stack.Screen
        name={MainRoutes.CONTENT_TAB}
        component={ContentTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MainRoutes.SELECT_PHOTOS}
        component={SelectPhotosScreen}
      />
      <Stack.Screen
        name={MainRoutes.UPDATE_PROFILE}
        component={UpdateProfileScreen}
      />
      <Stack.Screen
        name={MainRoutes.IMAGE_PICKER}
        component={ImagePickerScreen}
      />
      <Stack.Screen name={MainRoutes.WRITE_TEXT} component={WriteTextScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
