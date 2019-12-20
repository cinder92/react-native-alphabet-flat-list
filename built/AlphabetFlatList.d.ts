import * as React from 'react';
import { Component } from 'react';
import { FlatList, LayoutChangeEvent, ListRenderItemInfo, View, ViewToken } from "react-native";
import { IProps as SectionHeaderIProps } from './SectionHeader';
import AlphabetListView from "./AlphabetListView";
export interface IItemProps<I> {
    item: I;
    index: number;
    last: boolean;
}
export declare type ListRenderItem<ItemT> = (props: IItemProps<ItemT>) => React.ReactElement | null;
export declare type ListRenderSectionHeader<T> = (props: T) => React.ReactElement | null;
export interface IProps<ItemT> {
    data: {
        [key: string]: ItemT[];
    };
    itemHeight: number;
    renderItem: ListRenderItem<ItemT>;
    headerHeight?: number;
    sectionHeaderHeight?: number;
    renderSectionHeader?: ListRenderSectionHeader<SectionHeaderIProps>;
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
    alphabetToast?: boolean;
    activeBackgroundColor?: string;
    activeTextColor?: string;
    inactiveTextColor?: string;
}
export interface IState {
    containerHeight: number;
    itemLayout: {
        title: string;
        itemLength: number;
        beforeItemLength: number;
        length: number;
        offset: number;
    }[];
    titles: string[];
    selectAlphabet: string;
    initialNumToRender: number;
    pageY: number;
}
export default class AlphabetFlatList<ItemT> extends Component<IProps<ItemT>, IState> {
    static defaultProps: {
        headerHeight: number;
        sectionHeaderHeight: number;
        renderSectionHeader: React.FC<SectionHeaderIProps>;
        alphabetToast: boolean;
    };
    touchedTime: number;
    container?: View;
    list?: FlatList<ItemT>;
    alphabetList?: AlphabetListView;
    constructor(props: IProps<ItemT>, context: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IProps<ItemT>): void;
    refreshBaseData: (data: any) => void;
    onLayout: (e: LayoutChangeEvent) => void;
    onSelect: (index: number) => void;
    onViewableItemsChanged: (info: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => void;
    getItemLayout: (data: any, index: number) => {
        length: number;
        offset: number;
        index: number;
    };
    renderItem: (info: ListRenderItemInfo<string>) => JSX.Element;
    render(): JSX.Element;
}
