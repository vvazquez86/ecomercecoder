import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categorias from '../components/Categorias'
import { colors } from '../themes/colors'
import { categorias } from '../data/categorias'
import CategoriasItem from '../components/CategoriasItem'

const Home = ({ navigation }) => {


  return (
    <SafeAreaView style={styles.container}>
      <Header title="Categorias" navigation={navigation}/>
      <View style={styles.containerLista}>
        <FlatList
          data={categorias}
          keyExtractor={(key) => key}
          renderItem={({ item }) => <CategoriasItem navigation={navigation} item={item} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grisTono,
  },

  texto: {
    color: colors.marronSuave,
  },
    containerLista: {
    backgroundColor: colors.marronSuave,
    margin: 10,
    borderColor: colors.marronFuerte,
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textoLista: {
    fontSize: 20,
    marginVertical: 2,
    fontWeight: "300",
    color: colors.marronFuerte,
  }
});

export default Home