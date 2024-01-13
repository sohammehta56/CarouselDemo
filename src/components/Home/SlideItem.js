import React, { useRef, useEffect } from 'react';
import { Text, View, Animated, Easing } from 'react-native';
import { slideItemStyles } from './styles';

const SlideItem = ({ item, onTouchStart, onTouchEnd }) => {
  const translateYImage = useRef(new Animated.Value(40)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  return (
    <View
      style={slideItemStyles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          {
            transform: [
              {
                scale: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
              {
                translateY: translateYImage,
              },
            ],
            opacity: opacity,
          },
          slideItemStyles.image,
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
