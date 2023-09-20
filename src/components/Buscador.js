import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../themes/colors'
import { FontAwesome } from '@expo/vector-icons';

const Buscador = ({ text, setText }) => {

const limpiarTexto = ()=>{
    setText(null)
}
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(value) => setText(value)}
                value={text}
                style={styles.input} placeholder='Buscar un producto...'
            />
            <Pressable onPress={()=> limpiarTexto()}>
                {/* <AntDesign name="close" size={30} color={colors.marronFuerte} /> */}
                <FontAwesome name="times-circle" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginTop: 50,
    },

    input: {
        width: '70%',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        marginRight: 15,
    }
})



export default Buscador