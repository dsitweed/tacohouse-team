import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {AppStackParamList} from '@navigation/AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type SplashScreenProp = StackNavigationProp<AppStackParamList, 'Splash'>;

export default function SplashScreen(): JSX.Element {
  const navigation = useNavigation<SplashScreenProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('@assets/images/splash_background.jpeg')}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.body}>
          <Image source={require('@assets/logo.png')} style={styles.logo} />
          <Text style={styles.appName}>Tacohouse</Text>
          <ActivityIndicator
            size="small"
            color={styles.activityIndicator.color}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>2023® hust.edu.vn</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
