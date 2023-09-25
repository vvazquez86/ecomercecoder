import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categorias from '../components/Categorias'
import { colors } from '../themes/colors'

import CategoriasItem from '../components/CategoriasItem'
import { useSelector } from 'react-redux'

const Home = ({ navigation }) => {

const categorias = useSelector( state => state.homeSlice.allCategories)

console.log("Categorias: ", categorias)
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
    backgroundColor: colors.grisTono,
    margin: 10,
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