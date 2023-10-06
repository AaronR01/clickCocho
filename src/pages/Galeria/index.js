import { useState } from 'react';
import { View, Text, Image } from "react-native";

export default function Galeria1() {

    const [image, setImage] = useState(null);

    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <Text>Imagens</Text>
            <image source={{ uri: image }} />
        </View>
    )
}