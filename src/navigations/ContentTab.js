import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/photos/HomeScreen';
import ListScreen from '../screens/photos/ListScreen';
import ProfileScreen from '../screens/authenticate/ProfileScreen';
import { ContentRoutes } from './routes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY, PRIMARY } from '../colors';
import TabBarAddButton from '../components/photos/TabBarAddButton';
import Calender from '../screens/calender/Calender';
import CheckList from '../screens/checkList/CheckList';

const Tab = createBottomTabNavigator();

const getTabBarIcon = ({ focused, color, size, name }) => {
  const iconName = focused ? name : `${name}-outline`;
  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
};

const AddButtonScreen = () => null;

const ContentTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={ContentRoutes.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY.DARK,
        tabBarInactiveTintColor: GRAY.DARK,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={ContentRoutes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'home' }),
        }}
      />
      <Tab.Screen
        name={ContentRoutes.CALENDER}
        component={Calender}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'calendar' }),
        }}
      />
      <Tab.Screen
        name={'AddButton'}
        component={AddButtonScreen}
        options={{
          tabBarButton: () => <TabBarAddButton />,
        }}
      />
      <Tab.Screen
        name={ContentRoutes.CHECKLIST}
        component={CheckList}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'note-edit' }),
        }}
      />
      <Tab.Screen
        name={ContentRoutes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'account' }),
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
