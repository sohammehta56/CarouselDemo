import React, { useRef } from 'react';
import { Text, View, Animated, Easing } from 'react-native';
import { slideItemStyles } from './styles';

const SlideItem = ({ item }) => {

    const translateYImage = useRef(new Animated.Value(40)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    const opacityV2 = new Animated.Value(0);

    // Slide up animation
    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
    }).start();

    Animated.timing(opacityV2, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
    }).start();

    return (
        <View style={slideItemStyles.container}>
            <Animated.Image
                source={item.img}
                resizeMode="contain"
                style={[
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
                        opacity: opacityV2
                    },
                    slideItemStyles.image
                ]}
            />
            <View style={slideItemStyles.content}>
                <Text style={slideItemStyles.title}>{item.title}</Text>
                <Text style={slideItemStyles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

export default SlideItem;
