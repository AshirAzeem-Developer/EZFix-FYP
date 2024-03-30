import { Image, Text, View } from "react-native"
import style from "./style";

import icons from "../../../assets/icons";

const Signin=()=>{
    return(<>
    <View style={style.container}>
        <View style={style.imgview}>
        <Image source={icons.EZLogo} style={style.img}/>
        <Text style={style.txt1}>Login</Text>
        </View>
    </View>
    
    </>)
}
export default Signin;