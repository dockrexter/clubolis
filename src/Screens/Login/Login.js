import React from "react";
import { 
    ImageBackground,
    StyleSheet, 
    Text, 
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { normalize } from "../../Helpers/normalize";
import { getStatusBarHeight } from 'react-native-status-bar-height';




const Login = ({navigation,route}) => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/background.png")} resizeMode="cover" style={styles.image}>
                <View>
                    <Text style={styles.text}>{"Welcome to clubolis"}</Text>
                </View>
                <View style={styles.logo}>
                    <Image resizeMode="contain" source={require("../../../assets/LoginLogo.png")} />
                </View>
                <View style={styles.loginView}>
                    
                        <TouchableOpacity
                            onPress={()=>{navigation.navigate("Login2")}}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>{"Log In"}</Text>
                        </TouchableOpacity>
                    <Text style={styles.forgotPass}>{"Forgot Password?"}</Text>
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate("SignUp")}}
                        style={[styles.button,{marginTop:normalize(35)}]}
                    >
                        <Text style={styles.buttonText}>{"Sign Up"}</Text>
                    </TouchableOpacity>
                </View>
                
                    
                
                
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:getStatusBarHeight()+normalize(40),
        paddingBottom:normalize(89),
    },
    logo:{
        width:normalize(222),
        height:normalize(51),
        justifyContent:"center"
    },
    text: {
        fontFamily:"Poppins",
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    button:{
        width:"80%",
        height:normalize(46),
        borderRadius:normalize(23),
        backgroundColor:"#EB566B",
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        fontFamily:"Poppins",
        color: "white",
        textAlign: "center",
        fontSize:normalize(16),
        fontWeight:"500",
    },
    forgotPass:{
        fontFamily:"Poppins",
        color: "white",
        textAlign: "center",
        fontSize:normalize(14),
        fontWeight:"500",
        lineHeight:21,
        marginTop:normalize(11),
    },
    loginView:{
        alignItems:"center",
        width:"100%"
    }

});

export default Login;