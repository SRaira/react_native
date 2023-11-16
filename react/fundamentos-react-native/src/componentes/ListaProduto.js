import React from "react";
import { View, Text } from "react-native";
import Estilos from "../estilos";
import estilos from "../estilos";
import produtos from "../mocks/produtos";
export default props => {
    return(
        <View>
            <Text style = {Estilos.text}>Lista de Produtos</Text>
            {
                produtos.map(produtos =>{
                    return(
                        <Text key={produtos.id}>{produtos.id}</Text>
                    )
                } )
            }
        </View>
    )
}