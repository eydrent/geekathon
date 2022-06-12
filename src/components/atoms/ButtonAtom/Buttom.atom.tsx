import {Button} from "./Buttom.styled";

interface ButtonAtomProps {
    background?: string;
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    gradientColorPrimary?: string;
    gradientColorSecondary?: string;
    height: string;
    hoverBackground?: string;
    hoverBackgroundColor?: string;
    hoverBorder?: string;
    hoverColor?: string;
    text: string;
    width: string;
}

export const ButtonAtom = (props: ButtonAtomProps) => {
    let backgroundGradient = `
    linear-gradient(
      180deg,
      ${props.gradientColorPrimary} 0%,
      ${props.gradientColorSecondary} 81.77%
    );
  `;

    const {
        background = backgroundGradient,
        backgroundColor,
        border = "none",
        borderRadius = "1.8rem",
        color,
        fontSize,
        fontWeight,
        gradientColorPrimary,
        gradientColorSecondary,
        height,
        hoverBackground,
        hoverBackgroundColor,
        hoverBorder,
        hoverColor,
        text,
        width,
    } = props;
    return (
        <Button
            background={background}
            backgroundColor={backgroundColor}
            border={border}
            borderRadius={borderRadius}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            gradientColorPrimary={gradientColorPrimary}
            gradientColorSecondary={gradientColorSecondary}
            height={height}
            hoverBackground={hoverBackground}
            hoverBackgroundColor={hoverBackgroundColor}
            hoverBorder={hoverBorder}
            hoverColor={hoverColor}
            width={width}
        >
            {text}
        </Button>
    );
};
