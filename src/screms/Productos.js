import { View, Text, FlatList, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Buscador from '../components/Buscador'
import Header from '../components/Header'
import { productos } from '../data/productos'
import ProductosItem from '../components/ProductosItem'
import { useEffect, useState } from 'react'


const Productos = ({ route, navigation }) => {

    const [categoriaProd, setcateogoriaProd] = useState([]);
    const [text, setText] = useState(null);

    const { item } = route.params;

    console.log(item)

    useEffect(() => {
        const categoriaProductos = productos.filter((el) => el.category === item);
        setcateogoriaProd(categoriaProductos);

        if(text) {
            const nombreProducto = productos.filter(
                (el) => el.title.toLowerCase() === text.toLowerCase()
            );
            setcateogoriaProd(nombreProducto);
        }
    }, [text, item])


    return (
        <SafeAreaView>
            <Header title={ item }/>
            <Pressable onPress={()=> navigation.goBack()}>
                <Text>Ir Atras</Text>
            </Pressable>
            <Buscador text={text} setText={setText}/>
            <FlatList
                data={categoriaProd}
                keyExtractor={productos.id}
                renderItem={({ item }) => <ProductosItem navigation={navigation} item={item} />}
            />
        </SafeAreaView>
    )
}

export default Productos