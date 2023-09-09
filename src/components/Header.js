 import { View, Text, StyleSheet, } from 'react-native'
 import React from 'react'
 import { colors } from '../themes/colors'
 import { textFont } from '../themes/textFont'

 
 const Header = ({ title }) => {
   return (
     <View style={styles.container}>
       <Text style={styles.title}> { title } </Text>
     </View>
   )
 }

 const styles = StyleSheet.create({
    container: {
        height: textFont.h1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.marronFuerte
    },

    title: {
        fontSize: 25,
        marginVertical: 10,
        fontWeight: "600",
        color: colors.marronSuave
    }
 })
 
 export default Header