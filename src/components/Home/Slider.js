import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Animated, Dimensions, FlatList, View } from 'react-native';
import Slides from '../../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import { sliderStyles } from './styles';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);

    const handleOnScroll = Animated.event(
        [
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX,
                    },
                },
            },
        ],
        {
            useNativeDriver: false,
            listener: event => {
                const offsetX = event.nativeEvent.contentOffset.x;
                const newIndex = Math.floor(offsetX / Dimensions.get('window').width);
                // Update index only if it has changed
                if (newIndex !== index) {
                    setIndex(index);
                }
            },
        }
    );

    const onViewableItemsChanged = ({ viewableItems }) => {
        setIndex(viewableItems[0].index);
    };

    const viewabilityConfigCallbackPairs = useRef([onViewableItemsChanged]).current;


    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    const scrollToNextItem = () => {
        const newIndex = (index + 1) % Slides.length;
        setIndex(newIndex);
        flatListRef.current?.scrollToIndex({
            index: newIndex,
            animated: true,
        });
    };

    useEffect(() => {
        const intervalId = setInterval(scrollToNextItem, 3000);
        return () => clearInterval(intervalId);
    }, [index]);

    return (
        <View style={sliderStyles.mainContainer}>
            <FlatList
                data={Slides}
                renderItem={({ item }) => <SlideItem item={item} index={index} />}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
                viewabilityConfig={viewabilityConfig}
                ref={flatListRef}
            />
            <Pagination data={Slides} scrollX={scrollX} index={index} />
        </View>
    );
};

export default Slider;