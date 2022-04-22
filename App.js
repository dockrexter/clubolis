import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Poppins: require('./assets/Fonts/Poppins/Poppins-Black.ttf'),
    "Poppins-Light": require('./assets/Fonts/Poppins/Poppins-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
          <StackNavigation/>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
