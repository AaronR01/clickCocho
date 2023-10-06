import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function SigIn() {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [sec, setSec] = useState(true)
    const [exibeSenha, setExibeSenha] = useState('Exibir Senha')

    function logar(){
        const data = { email, senha}
        if(email === 'Adm.ufjf' && senha === '123') {
            navigation.navigate('Camera1')
        }
        else {
            console.log(data)
        }
    }

    function exibe(){
        if(exibeSenha === 'Exibir Senha'){
            setSec(false)
            setExibeSenha('Ocultar Senha')
        }
        else{
            setSec(true)
            setExibeSenha('Exibir Senha')
        }
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                    placeholder="Digite um email..."
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    placeholder="Sua senha"
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={sec}
                />
                <TouchableOpacity 
                style={styles.verSenha}
                onPress={exibe}
                >
                    <Text style={styles.registerText}>{exibeSenha}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={logar}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#935026'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#935026',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#A1A1A1'
    },
    verSenha: {

    }
})