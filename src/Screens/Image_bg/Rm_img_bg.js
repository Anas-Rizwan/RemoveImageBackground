//import liraries
import React, { useState } from 'react';
import Header from '../../ReuseComponent/Header';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar, } from 'react-native';
import { launchImageLibrary, showImagePicker } from 'react-native-image-picker';
import { moderateScale, scale, moderateVerticalScale } from 'react-native-size-matters';
import styles from './styles';
import ImageData from './ImageData';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { androidCameraPermission } from '../../../permission';
import axios from 'axios';
// create a component

const Rm_img_bg = () => {
    const [filePath, setFilePath] = useState();
    const [image, setimage] = useState(require('../../assets/img5.jpg'));
    const menu = require('../../assets/menu.png')
    const api = "https://soft464.gotheglobals.com/api/upload"

    const chooseFile = async () => {


        let options = {
            mediaType: 'photo',
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        const imageData = await launchImageLibrary(options, (response) => {
            try {
                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }
                // console.log('uri -> ', response.assets[0].uri);
                setFilePath(response.assets[0].uri);
                imageUpload(response.assets[0].uri)

            } catch (error) {
                console.log(error);
            }
        });


    };

    const imageUpload = async (imagePath) => {
        try {
            const imageData = new FormData()
            imageData.append("image_url", {
                uri: imagePath,
                name: 'image.png',
                fileName: 'image',
                type: 'image/png'
            })
            console.log("form data", imageData)
            axios({
                method: 'post',
                url: api,
                data: imageData
            }).then(function (response) {
                console.log("image upload successfully", response)
            }).catch((error) => {
                console.log("error riased", error)
            })
        } catch (error) {
            console.log("error riased", error)
        }



    }
    const getimage = async () => {
        try {
            // const imageData = new FormData()
            // imageData.append("image_url", {
            //     uri: imagePath,
            //     name: 'image.png',
            //     fileName: 'image',
            //     type: 'image/png'
            // })
            // console.log("form data", imageData)
            axios({
                method: 'get',
                url: "http://soft464.gotheglobals.com/no_bg_1678733463.png",
                // data: imageData
            }).then(function (response) {
                console.log("Get image  successfully", response.data)
                setFilePath(response.data)
                console.log(filePath);
            }).catch((error) => {
                console.log("error riased", error)
            })
        } catch (error) {
            console.log("error riased", error)
        }



    }


    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Header
                label='iB remover'
                image={menu}
                onpress={() => {
                    navigation.openDrawer();
                }}
            />

            <View style={{ flex: 1, justifyContent: 'space-around', }}>
                <View style={{ flex: 1, }}>
                    {!!filePath ?
                        <View style={styles.selected_img_view}>
                            <Image source={{ uri: filePath }} style={{ width: '80%', height: '80%', }} resizeMode='contain' />
                        </View>
                        :
                        <View style={styles.image_view}>
                            <Image source={image} style={{ width: '50%', height: '50%', }} resizeMode='contain' />
                            <Text style={styles.image_text1}>Remove Images{'\n'}Background</Text>
                            <Text style={styles.image_text2}> 100% Automatically And{'\n'}Free</Text>
                        </View>
                    }
                </View>

                <View >
                    {/* {
                        !!filePath ?
                            <View >
                                <TouchableOpacity
                                    activeOpacity={0.9} onPress={() => alert('Waiting')}
                                    style={[styles.btn_view, { marginBottom: moderateVerticalScale(40) }]} >
                                    <Text style={styles.btn_text}>Click To Edit</Text>
                                </TouchableOpacity>
                            </View>
                            :
                    } */}
                    <View >
                        <TouchableOpacity activeOpacity={0.9}
                            style={styles.btn_view}
                            onPress={chooseFile}>
                            <Text style={styles.btn_text}>Upload Image</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity activeOpacity={0.9}
                            style={styles.btn_view}
                            onPress={getimage}>
                            <Text style={styles.btn_text}>Get Image</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    {
                        !!filePath ?
                            null : <>
                                <Text style={styles.bottom_img_text}>No image? Try one of these:</Text>
                                <View style={styles.bottom_img_view} >
                                    {
                                        ImageData.map((v) => (
                                            <TouchableOpacity key={v.id} onPress={() => setimage(v.src)} style={styles.bottom_img}>
                                                <Image source={v.src} style={{ borderRadius: 10, height: moderateVerticalScale(60), width: moderateScale(60) }} resizeMode='contain' />
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>
                            </>
                    }
                </View>
            </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default Rm_img_bg;
