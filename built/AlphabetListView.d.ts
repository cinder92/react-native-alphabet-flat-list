import { PureComponent } from 'react';
import { GestureResponderEvent, PanResponderGestureState, PanResponderInstance } from 'react-native';
interface IProps {
    contentHeight: number;
    topPosition: number;
    pageY: number;
    titles: string[];
    onSelect: (index: number) => void;
    alphabetToast: boolean;
    activeBackgroundColor?: string;
    activeTextColor?: string;
    inactiveTextColor?: string;
}
declare const initState: {
    selectAlphabet: string;
    itemHeight: number;
};
declare type State = Readonly<typeof initState>;
declare class AlphabetListView extends PureComponent<IProps, State> {
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillReceiveProps(props: IProps): void;
    updateSelectAlphabet(selectAlphabet: string): void;
    initData({ titles, contentHeight }: IProps): void;
    onTouchChange: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void;
    responder: PanResponderInstance;
    render(): JSX.Element;
}
export default AlphabetListView;
