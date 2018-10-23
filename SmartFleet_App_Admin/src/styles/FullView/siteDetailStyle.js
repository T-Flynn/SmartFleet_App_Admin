import {
    StyleSheet
} from 'react-native';

import { Dimensions } from 'react-native';

export default siteDetailStyle = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 40
    },
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: '#fff',
    },
    mapView: {
        width: Dimensions.get('window').width,
        height: 180,
    },
    tabbar: {
        width: Dimensions.get('window').width,
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    lineStyle: {
        marginBottom: -1.5,
        width: Dimensions.get('window').width / 2,
        height: 2,
        backgroundColor: '#FF0000',
    },
    textStyle: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
    },

    itemView: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    itemviewLeft: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 20,
    },
    itemTitleView: {
        flexDirection: 'row',
        // marginBottom: 5,
    },
    itemName: {
        fontSize: 14,
        color: '#1c1c1d',
        marginRight: 10,
    },
    textBody: {
        fontSize: 12,
        color: '#9797a3',
    },
    texView: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginRight: 8,
    },
    image_right: {
        width: 13,
        height: 16,
        marginVertical: 5,
        resizeMode: 'contain',
    },
    separator: {
        backgroundColor: '#dfdfdf',
        height: 0.5,
    },

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    frame: {
        width: Dimensions.get('window').width / 2,
        paddingTop: 8,
        paddingRight: 5,
    },
    title: {
        flex: 0,
        fontSize: 14,
        color: '#1c1c1d',
    },
    subTitle: {
        flex: 1,
        fontSize: 14,
        color: '#9797a3',
    },
    textFont: {
        // margin: 5,
        marginTop: 8,
        marginBottom: 0,
        fontSize: 14,
        color: '#00BFFF',
    }
});