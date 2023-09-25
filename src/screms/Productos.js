import { View, Text, FlatList, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Buscador from '../components/Buscador'
import Header from '../components/Header'
import ProductosItem from '../components/ProductosItem'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'



const Productos = ({ route, navigation }) => {

    const [categoriaProd, setCateogoriaProd] = useState([]);
    const [text, setText] = useState(null);
    const { item } = route.params;
    const productos = useSelector( state => state.homeSlice.allProducts)
    
    const productsFilterByCategory = useSelector(
        (state) => state.homeSlice.productsFilterByCategory
    );


//Forma de ver un JSON ordenado en la consola...
//console.log("Productos desde el store", JSON.stringify(productos, null, " "))

    console.log('Productos traidos ', JSON.stringify(productsFilterByCategory, null, " "))

    useEffect(() => {
        
        setCateogoriaProd(productsFilterByCategory)

        if(text) {
            const nombreProducto = productos.filter((el) => el.title === text);
            setCateogoriaProd(nombreProducto);
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