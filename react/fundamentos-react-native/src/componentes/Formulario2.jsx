import React, {useState} from 'react';
import { View, TextInput, Text } from 'react-native';
export default props => {

    const [nome, setEmail] = useState("");

    return (
        <View>
            <TextInput
                style={{borderWidth: 1.0}}
                placeholder='Digite seu email'
                value={email}
                onChangeText={email => setEmail(email)}
            />
        </View>
    )
}