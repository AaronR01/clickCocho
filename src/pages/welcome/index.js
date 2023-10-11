import React from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../components/CustomButton";

export default function Welcome() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logob.png')}
                    style={{ width: '70%', position: 'absolute'}}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Utilize seu celular para fazer uma análise do seu cocho!</Text>
                <Text style={styles.text}>Logue para salvar suas análises ou faça uma análise isolada.</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <CustomButton text="Teste" route="SignIn"/>
                <TouchableOpacity 
                    style={styles.buttoSemLogim}
                    onPress={ () => navigation.navigate('Camera1')}>
                    <Text style={styles.buttoTextSemLogim}>Analizar sem conta</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#935026'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#935026',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#935026',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1',
        fontSize: 12.5,
    },
    button:{
        position: 'absolute',
        backgroundColor: '#935026',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '21%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    buttoSemLogim:{
        position: 'absolute',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttoTextSemLogim:{
        fontSize: 14,
        color: '#935026',
    }
})