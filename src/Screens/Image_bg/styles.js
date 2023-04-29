import { StyleSheet, } from 'react-native';
import { moderateScale, scale, moderateVerticalScale } from 'react-native-size-matters';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    image_view: {
        marginVertical: moderateVerticalScale(20),
        flex: 0.75,
        alignItems: 'center',
    },
    image_text1: {
        marginVertical: moderateVerticalScale(20),
        fontSize: scale(30),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fd51d1',
    },
    image_text2: {
        fontSize: scale(20),
        textAlign: 'center',
        color: '#000',
    },
    selected_img_view: {
        flex: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_view: {
        borderWidth: 1,
        borderColor: '#fc0fc0',
        width: '80%',
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        padding: moderateScale(10),
        backgroundColor: '#fc0fc0',
    },
    btn_text: {
        fontSize: scale(25),
        fontWeight: 'bold',
        color: '#f8ff80'
    },
    bottom_img_view: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottom_img_text: {
        marginBottom: moderateVerticalScale(13),
        marginTop: moderateVerticalScale(25),
        textAlign: 'center',
        color: '#ffade4'

    },
    bottom_img: {
        marginHorizontal: moderateScale(10),
        marginBottom: moderateVerticalScale(25),
    },
});