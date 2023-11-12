import React, {useState} from "react";
import { Text, Button, View } from "react-native";
import Estilos from "../estilos";

export default ({ inicial = 0, passo = 1 }) => {

    const [numero, setNumero] = useState(inicial);

    function inc(){
       setNumero(numero + passo);
    }

    function dec(){
        setNumero(numero - passo);
    }

    return (
        <>
            <Text style={Estilos.textDois}>
                {numero}
            </Text>
            <View style={{flexDirection: "row"}}>
                <Button 
                    title="+"
                    onPress={inc}
                />
                <Button
                    title="-"
                    onPress={dec}
                />
            </View>

            <Button
                title=""
                onPress={executar}
            />
            
        </>
        
    )

}