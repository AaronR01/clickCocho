import React, { useEffect, useState, useRef } from "react"
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text, Modal, Image} from "react-native"
import { Camera, CameraType } from 'expo-camera'
import { FontAwesome } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

export default function Camera1() {
    const camRef = useRef(null)
    const [permission, requestPermission] = Camera.useCameraPermissions()
    const [type, setType] = useState(Camera.Constants.Type.front)
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        requestPermission(),
        (async () => {
            MediaLibrary.requestPermissionsAsync()
        })()
    },[])

    if(!permission?.granted){
        return
    }

    async function takePicture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync()
            setCapturedPhoto(data.uri)
            setOpen(true)
            console.log(data)
        }
    }

    async function savePicture(){
        const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
        .then(()=>{
            alert('Foto salva com sucesso!')
        })
        .catch(error=> {
            console.log('err', error)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera 
                style={styles.camera}
                type={type}
                ref={camRef}
            >
                <View style={styles.botoes}>
                    <TouchableOpacity 
                        style={styles.trocaCamera}
                        onPress={ () => {
                            setType(
                                type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            )
                        }}
                        >
                            <Text style={styles.textTroca}>Troca</Text>
                    </TouchableOpacity>
                </View>
            </Camera>

            <TouchableOpacity style={styles.tirarFoto}
                onPress={ takePicture }
            >
                <FontAwesome name="camera" size={23} color="#935026"/>
            </TouchableOpacity>

            { capturedPhoto &&
                <Modal
                animationType="slide"
                transparent={false}
                visible={open}
                >
                    <View style={styles.modal}>
                        <View style={{margin: 10, flexDirection: 'row'}}>
                        <TouchableOpacity style={{ margin: 10}} onPress={ () => setOpen(false)}>
                            <FontAwesome name="window-close" size={50} color="#935026"/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ margin: 10}} onPress={ savePicture }>
                            <FontAwesome name="upload" size={50} color="#935026"/>
                        </TouchableOpacity>

                        </View>

                        <Image 
                            style={{ width: '100%', height: 450, borderRadius: 20 }}
                            source={{ uri: capturedPhoto }}
                        />

                    </View>
                </Modal>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#935026'
    },
    camera: {
        flex: 1,
    },
    botoes: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    trocaCamera: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    textTroca: {
        fontSize: 20,
        marginBottom: 13,
        color: '#FFF'
    },
    tirarFoto: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        margin: 20,
        borderRadius: 10,
        height: 50,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    }
    })

