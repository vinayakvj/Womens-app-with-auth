import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Call from "../components/Call";
import Map from "../Components/Map";
import useLocation from "../hooks/useLocation";

const LocationScreen = ({ isFocused}) => {
    const [errorMsg] = useLocation(isFocused);

    return (
       <View style={styles.container}>
         <Image style={styles.img} source={require('../img/pinkpal.png')} /> 
         <Map />
         {errorMsg ? <Text>Please enable location services</Text> : null}
         <Call />
       </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  img: {
    height: 70,
    width: 100,
  },
  txt: {
    color: "#b80646",
    fontSize: 20,
    marginLeft: 60,
    marginRight: 40,
  },
});

export default LocateScreen;
