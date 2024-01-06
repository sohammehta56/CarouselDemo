import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import Slider from "./Slider";

const Home = () => {
    return (
        <SafeAreaView style={styles.mainWrapper}>
            <Slider />
        </SafeAreaView>
    )
}
export default Home;