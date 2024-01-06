import React, { useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, Easing } from 'react-native';

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {
    const translateYImage = useRef(new Animated.Value(40)).current;
    const opacity = useRef(new Animated.Value(1)).current;

    // Slide up animation
    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
    }).start();

    // Fade in animation
    Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
    }).start();


    return (
        <View style={styles.container}>
            <Animated.Image
                source={item.img}
                resizeMode="contain"
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                scale: opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.85, 1]
                                })
                            },
                            {
                                translateY: translateYImage,
                            },
                        ],
                        opacity: opacity,
                    },
                ]}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    image: {
        flex: 0.6,
        width: '100%'
    },
    content: {
        flex: 0.4,
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        flexWrap: 'wrap'
    },
    description: {
        fontSize: 18,
        marginVertical: 12,
        color: '#333',
        flexWrap: 'wrap'
    }
});
