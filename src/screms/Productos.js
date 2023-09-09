import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Buscador from '../components/Buscador'
import Header from '../components/Header'
import { productos } from '../data/productos'
import ProductosItem from '../components/ProductosItem'
import { useEffect, useState } from 'react'

const Productos = ({ categoria }) => {

    const [categoriaProd, setcateogoriaProd] = useState([]);
    const [text, setText] = useState(null);

    useEffect(() => {
        const categoriaProductos = productos.filter((el) => el.category === categoria);
        setcateogoriaProd(categoriaProductos);

        if(text) {
            const nombreProducto = productos.filter(
                (el) => el.title.toLowerCase() === text.toLowerCase()
            );
            setcateogoriaProd(nombreProducto);
        }
    }, [text])


    return (
        <View>
            <Header title="Productos" />
            <Buscador text={text} setText={setText}/>
            <FlatList
                data={categoriaProd}
                keyExtractor={productos.id}
                renderItem={({ item }) => <ProductosItem item={item} />}
            />
        </View>
    )
}

export default Productos