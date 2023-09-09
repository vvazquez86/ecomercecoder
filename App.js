import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/themes/colors';
import Header from './src/components/Header';
import Categorias from './src/components/Categorias';
import Home from './src/screms/Home';
import { textFont } from './src/themes/textFont';

export default function App() {
  return (
    <View>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.marronSuave
  },

})


