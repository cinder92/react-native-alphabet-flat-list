import { FC } from 'react';
interface IProps {
    title: string;
    height: number;
    active: boolean;
    activeBackgroundColor?: string;
    activeTextColor?: string;
    inactiveTextColor?: string;
}
declare const SectionListItem: FC<IProps>;
export default SectionListItem;
