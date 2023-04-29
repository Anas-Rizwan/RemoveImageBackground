//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

// create a component
const Header = ({
    label,
    image,
    onpress
}) => {
    return (
        <View style={styles.header_view}>
            <View>
            <Text style={styles.header_text1}>{label}</Text>
            </View>
            <TouchableOpacity style={{
                marginHorizontal: moderateScale(20),
                marginTop: moderateVerticalScale(25),
                
            }} activeOpacity={0.8} onPress={onpress} >
                <Image source={image} style={styles.header_img} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#fc0fc0',
        backgroundColor: "#fc0fc0",
        height: 80,
    },
    header_text1: {
        marginHorizontal: moderateScale(20),
        marginTop: moderateVerticalScale(20),
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold',
    },
    header_img: {
        // marginHorizontal: moderateScale(20),
        // marginVertical: moderateVerticalScale(10),
        tintColor: '#fff',
    },
});

//make this component available to the app
export default Header;
