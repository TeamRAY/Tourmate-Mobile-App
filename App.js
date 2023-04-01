import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/screens/LandingPage';

export default function App() {
  return (
    // <View><Text>Hi</Text></View>
    <LandingPage/>
  );
}
//Test
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
