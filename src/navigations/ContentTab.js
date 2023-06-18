import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenNavigation from './HomeScreenNavigation';
import ProfileScreen from '../screens/authenticate/ProfileScreen';
import { ContentRoutes } from './routes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY, PRIMARY } from '../colors';
import TabBarAddButton from '../components/photos/TabBarAddButton';
import Calender from '../screens/calender/Calender';
import CheckList from '../screens/checkList/CheckList';
import Community from '../screens/community/Community';

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
        component={HomeScreenNavigation}
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
        name={ContentRoutes.COMMUNITY}
        component={Community}
        options={{
          tabBarIcon: (props) =>
            getTabBarIcon({ ...props, name: 'comment-account' }),
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
