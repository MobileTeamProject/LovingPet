import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BLACK, WHITE } from '../../colors';
import { HomeScreenRoute } from '../../navigations/routes';
import MyPageButton from '../../components/photos/MyPageButton';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const height = useWindowDimensions().height / 4;

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.homeButtonView}>
        <MyPageButton navigation={navigation} />
      </View>
      <View style={styles.topContainer}>
        <Image
          source={require('../../../assets/icon.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>Loving Pet</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate(HomeScreenRoute.LIST)}>
          <Image
            source={require('../../../assets/home-clock.png')}
            style={[styles.image, { height }]}
          />
          <Text style={styles.buttonTitle}>PhotoHistory</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate(HomeScreenRoute.MAP)}>
          <Image
            source={require('../../../assets/home-map.png')}
            style={[styles.image, { height }]}
          />
          <Text style={styles.buttonTitle}>WorldMap</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: WHITE,
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 10,
  },
  buttonContainer: { marginVertical: 10 },
  image: { borderRadius: 10, width: '100%' },
  buttonTitle: {
    position: 'absolute',
    color: BLACK,
    fontSize: 20,
    fontWeight: '700',
    bottom: 30,
    left: 30,
  },
  homeButtonView: {
    height: 70,
    alignItems: 'flex-end',
  },
});

export default HomeScreen;
