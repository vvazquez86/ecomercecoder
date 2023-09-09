import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'

const CategoriasItem = ( {item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
    container: {
        margin: 5
    },

    text: {
        
        marginVertical: 2,        
        backgroundColor: colors.marronMedio,

        //Estilo de bordes
        borderRadius: 10,
        borderColor: colors.marronFuerte,
        borderWidth: 1,
        
        //Estilo de texto
        fontSize: 18,
        textAlign: "center",
        padding: 10,
        fontWeight: "350",
        color: colors.marronFuerte,
    }
 })

export default CategoriasItem