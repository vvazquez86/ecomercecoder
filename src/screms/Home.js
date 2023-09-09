import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categorias from '../components/Categorias'
import { colors } from '../themes/colors'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Categorias"/>
      <Categorias /> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {      
      backgroundColor: colors.grisTono,
    },
  
    texto: {
      color: colors.marronSuave,
    }
  });

export default Home