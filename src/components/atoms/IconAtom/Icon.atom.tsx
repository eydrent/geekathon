import {Icon} from "./Icon.styled";

interface IconAtomProps {
    icon: string;
    color?: string;
    size?: string;
    styleClass?: string;

}

export const IconAtom = (props: IconAtomProps) => {

    const {
        icon,
        styleClass,
        size = "2.4rem",
        color = 'white'
    } = props;
    // @ts-ignore
    return (
        <Icon className={`${styleClass} ${icon}`} color={color} size={size}>
        </Icon>
    );
};
