import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations';
import { LogBox } from 'react-native';
import { UserProvier } from './contexts/UserContext';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import useCachedResources from './useCachedResources';

const App = () => {
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <ActionSheetProvider>
        <UserProvier>
          <StatusBar style={'dark'} />
          <Navigation />
        </UserProvier>
      </ActionSheetProvider>
    );
  } else {
    return null;
  }
};

export default App;
