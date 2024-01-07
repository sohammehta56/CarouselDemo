import { Animated, View, Dimensions } from 'react-native';
import React from 'react';
import { paginationStyles } from './styles';

const { width } = Dimensions.get('screen');

export const Pagination = ({ data, scrollX, index }) => {
    return (
        <View style={paginationStyles.container}>
            {data.map((_, idx) => {
                const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

                const dotWidth = scrollX?.interpolate({
                    inputRange,
                    outputRange: [12, 30, 12],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX?.interpolate({
                    inputRange,
                    outputRange: [0.4, 1, 0.8],
                    extrapolate: 'clamp',
                });

                const backgroundColor = scrollX?.interpolate({
                    inputRange,
                    outputRange: ['#ccc', '#fff', '#ccc'],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        key={idx.toString()}
                        style={[
                            paginationStyles.dot,
                            { width: dotWidth, backgroundColor, opacity }
                        ]}
                    />
                );
            })}
        </View>
    );
};

export default Pagination;

