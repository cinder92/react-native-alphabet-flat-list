"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const SectionHeader_1 = require("./SectionHeader");
const styles_1 = require("./styles");
const AlphabetListView_1 = require("./AlphabetListView");
const defaultProps = {
    headerHeight: 0,
    sectionHeaderHeight: SectionHeader_1.sectionHeaderHeight,
    renderSectionHeader: SectionHeader_1.default,
    alphabetToast: true
};
const windowHeight = react_native_1.Dimensions.get('window').height;
class AlphabetFlatList extends react_1.Component {
    constructor(props, context) {
        super(props, context);
        this.touchedTime = 0;
        this.refreshBaseData = (data) => {
            const titles = Object.keys(data);
            const offset = (index, itemLength) => index * this.props.sectionHeaderHeight + itemLength * this.props.itemHeight;
            const itemLayout = titles.map((title, index) => {
                const beforeItemLength = titles
                    .slice(0, index)
                    .reduce((length, item) => length + data[item].length, 0);
                const itemLength = data[title].length;
                return {
                    title,
                    itemLength,
                    beforeItemLength,
                    length: this.props.sectionHeaderHeight + this.props.itemHeight * itemLength,
                    offset: offset(index, beforeItemLength) + this.props.headerHeight
                };
            });
            let initialNumToRender = itemLayout.findIndex(item => item.offset >= this.state.containerHeight);
            if (initialNumToRender < 0) {
                initialNumToRender = titles.length;
            }
            this.setState({
                itemLayout,
                titles,
                selectAlphabet: titles[0],
                initialNumToRender
            });
        };
        this.onLayout = (e) => {
            try {
                react_native_1.InteractionManager.runAfterInteractions(() => {
                    if (this.container) {
                        this.container.measure((x, y, w, h, px, py) => {
                            this.setState({
                                pageY: py
                            });
                        });
                    }
                });
                this.setState({
                    containerHeight: e.nativeEvent.layout.height - this.props.headerHeight
                });
            }
            catch (error) {
                console.error('捕获错误', error);
            }
        };
        this.onSelect = (index) => {
            if (this.list) {
                this.list.scrollToIndex({ index, animated: true });
            }
            this.touchedTime = new Date().getTime();
        };
        this.onViewableItemsChanged = (info) => {
            if (info.viewableItems.length) {
                if ((new Date().getTime() - this.touchedTime) < 500) {
                    return;
                }
                if (this.alphabetList) {
                    this.alphabetList.updateSelectAlphabet(info.viewableItems[0].item);
                }
            }
        };
        this.getItemLayout = (data, index) => ({
            length: this.state.itemLayout[index].length,
            offset: this.state.itemLayout[index].offset,
            index
        });
        this.renderItem = (info) => {
            return (<react_native_1.View key={info.index}>
        {this.props.renderSectionHeader && this.props.renderSectionHeader({ title: info.item })}
        {this.props.data[info.item].map((itemValue, itemIndex, items) => this.props.renderItem({
                item: itemValue,
                index: itemIndex,
                last: itemIndex === items.length - 1
            }))}
      </react_native_1.View>);
        };
        this.state = {
            containerHeight: windowHeight,
            itemLayout: [],
            titles: [],
            selectAlphabet: '',
            initialNumToRender: 0,
            pageY: 0
        };
    }
    componentDidMount() {
        this.refreshBaseData(this.props.data);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.refreshBaseData(nextProps.data);
        }
    }
    render() {
        return (<react_native_1.View style={styles_1.default.container} ref={(ref) => {
            this.container = ref;
        }} onLayout={this.onLayout}>
        <react_native_1.FlatList ref={(ref) => {
            this.list = ref;
        }} {...this.props} data={this.state.titles} renderItem={this.renderItem} keyExtractor={(item, index) => `${index}`} getItemLayout={this.getItemLayout} initialNumToRender={this.state.initialNumToRender} onViewableItemsChanged={this.onViewableItemsChanged}/>
        <AlphabetListView_1.default ref={(ref) => {
            this.alphabetList = ref;
        }} topPosition={this.props.headerHeight} pageY={this.state.pageY + this.props.headerHeight} contentHeight={this.state.containerHeight - this.props.headerHeight} titles={this.state.titles} onSelect={this.onSelect} alphabetToast={this.props.alphabetToast} activeBackgroundColor={this.props.activeBackgroundColor} activeTextColor={this.props.activeTextColor} inactiveTextColor={this.props.inactiveTextColor} fontSize={this.props.fontSize}/>
      </react_native_1.View>);
    }
}
exports.default = AlphabetFlatList;
AlphabetFlatList.defaultProps = defaultProps;
//# sourceMappingURL=AlphabetFlatList.js.map