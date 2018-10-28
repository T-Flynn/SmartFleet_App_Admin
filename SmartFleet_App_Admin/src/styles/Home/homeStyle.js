import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export default homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    scrollView: {
        padding: 10,
    },
    separator: {
        backgroundColor: '#dfdfdf',
        height: 0.5,
    },
    space_horizontal: {
        width: 20,
    },
    space_Vertical: {
        height: 20,
    },

    flex_row: {
        flexDirection: 'row',
    },
    flex_column: {
        flexDirection: 'column',
    },
    staticView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
        flexWrap: 'wrap',
    },
    staticView_: {
        width: (Dimensions.get('window').width - 32) / 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 15,
        marginBottom: 12,
    },
    static_titleView: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    static_subView: {
        marginTop: 3,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    static_title: {
        fontSize: 18,
        color: '#2d2d2d',
        fontWeight: 'bold',
        marginRight: 2,
    },
    static_sunTitle: {
        fontSize: 12,
        color: '#adadad',
    },
    static_image: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginRight: 8,
    },

    bodyView: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 3,
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 8,
        backgroundColor: '#fff',
    },
    btnView: {
        height: 40,
        marginRight: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnView_: {
        height: 30,
        marginRight: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#24ba8e',
        borderBottomWidth: 2,
    },
    btnTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#2d2d2d',
    },
    btnTitle_: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#24ba8e',
    },



    itemView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderColor: '#f3f3f3',
        borderWidth: 1,
        borderRadius: 3,
        marginVertical: 5,
    },
    itemTopView: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
    },
    itemTopLeft: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 8,
    },
    itemTopRight: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2d2d2d',
    },
    time: {
        fontSize: 12,
        color: '#adadad',
    },
    imgagRight: {
        marginLeft: 3,
        width: 10,
        height: 11,
        resizeMode: 'contain',
    },
    itemBodyView: {
        paddingTop: 8,
        paddingHorizontal: 8,
        flexDirection: 'column',
        // backgroundColor: 'red',
    },
    itemTextView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 12,
    },
    itemText: {
        fontSize: 12,
        color: '#2d2d2d',
    },
    itemClear: {
        marginLeft: 5,
        fontSize: 12,
        color: '#fff',
        padding: 3,
        backgroundColor: '#adadad',
    },
    itemClear_: {
        marginLeft: 5,
        fontSize: 12,
        color: '#fff',
        padding: 3,
        backgroundColor: '#24ba8e',
    },
    itemLevelImage: {
        marginLeft: 3,
        width: 12,
        height: 12,
        resizeMode: 'contain',
    },

    nodataView: {
        flex: 1,
        minHeight: 300,
        backgroundColor: '#fff',
    }
});