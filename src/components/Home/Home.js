import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import Slider from "./Slider";
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
    return (
        <LinearGradient
            colors={['#001f3f', '#0058a3']}
            style={styles.gradientContainer}
        >
            <SafeAreaView style={styles.mainWrapper}>
                <Slider />
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Home;