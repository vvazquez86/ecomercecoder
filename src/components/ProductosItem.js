import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'

const ProductosItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{item.title}</Text>
            <Image style={styles.imagen} height={60} width={60} source={ {uri: item.images[0]} } resizeMode='cover' />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.grisTono,
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.marronFuerte,
        borderRadius: 10,
        borderWidth: 2,
        height: 80,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

    texto: {
        fontSize: 20,
        fontWeight: "400",
        marginLeft: 20,
    },

    imagen: {
        marginRight: 10,
        borderColor: colors.marronFuerte,
        borderWidth: 2,
    }
})

export default ProductosItem