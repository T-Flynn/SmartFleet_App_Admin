
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    Dimensions,
} from 'react-native';


import PropTypes from 'prop-types';

class TabBarTop extends Component {

    static propTypes = {
        ...View.props,
        goToPage: PropTypes.func, // 跳转到对应tab的方法
        activeTab: PropTypes.number, // 当前被选中的tab下标
        tabs: PropTypes.array, // 所有tabs集合

        tabNames: PropTypes.array, // 保存Tab名称
        tabImages: PropTypes.array, // 保存Tab图标
        tabSelectImages: PropTypes.array,
    }
    static defaultProps = {
        tabNames: [], // 保存Tab名称
        tabImages: [], // 保存Tab图标
        tabSelectImages: []
    }

    setAnimationValue({ value }) {
        // console.log(value);
    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#24ba8e" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        let tabImage = this.props.tabImages.length == 0 ? null : this.props.activeTab == i ? this.props.tabSelectImages[i] : this.props.tabImages[i];
        let border = this.props.activeTab == i ? { borderBottomColor: '#24ba8e', borderBottomWidth: 2, marginHorizontal: 8 } : {};

        return (
            <TouchableOpacity
                style={[styles.tabItem, { width: Dimensions.get('window').width / this.props.tabNames.length }]}
                onPress={() => { this.props.goToPage(i), this.props.changeTab ? this.props.changeTab(i) : {} }}
                key={i}
            >
                <View style={{ flexDirection: 'column' }}>
                    <View style={[styles.tabItem,]}>
                        {
                            tabImage == null ? <View /> : <Image source={tabImage} style={[styles.image, this.props.imageStyle]} />
                        }
                        <Text style={[{ color: color, fontSize: 14, fontWeight: 'bold', marginLeft: 3 }, this.props.textStyle]}>
                            {this.props.tabNames[i]}
                        </Text>
                    </View>
                    <View style={border} />
                </View>
            </TouchableOpacity >
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.tabs, this.props.style]}>
                    {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                </View>
                <View>
                    {
                        this.props.customView()
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabs: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    tabItem: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: 2,
        // paddingHorizontal: 5,
        minHeight: 38,
        // backgroundColor: 'green'
    },
    image: {
        width: 12,
        height: 12,
        // resizeMode: 'contain',
    }
});


export default TabBarTop;