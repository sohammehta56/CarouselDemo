import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 16,

    },
    gradientContainer: {
        flex: 1,
    }
})

export default styles;

export const sliderStyles = StyleSheet.create({
    mainContainer: {
        marginTop: 52
    }
})

export const paginationStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 35,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 3,
        backgroundColor: '#ccc',
    },
    dotActive: {
        backgroundColor: '#fff',
    },
});

export const slideItemStyles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    image: {
        flex: 0.6,
        width: '100%',
    },
    content: {
        flex: 0.4,
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#d3d3d3',
        flexWrap: 'wrap'
    },
    description: {
        fontSize: 18,
        marginVertical: 12,
        color: '#d3d3d3',
        flexWrap: 'wrap'
    }
});
