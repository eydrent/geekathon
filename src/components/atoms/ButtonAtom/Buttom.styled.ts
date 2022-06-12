import styled from "styled-components";

type ButtonProps = {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    backgroundColor?: string;
    backgroundColorHover?: string;
    background?: string;
    border?: string;
    height?: string;
    width?: string;
    hoverBorder?: string;
    hoverBackgroundColor?: string;
    hoverBackground?: string;
    hoverColor?: string;
    borderRadius?: string;
    gradientColorPrimary?: string;
    gradientColorSecondary?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  font-size: ${props => props.fontSize};
  line-height: 1.5;
  font-weight: ${(props) => props.fontWeight};
  background: ${props => props.background};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  padding: 0.5rem 1.5rem;
  height: ${(props) => props.height};
  width: ${({width}) => width};

  &:hover {
    border: ${(props) => props.hoverBorder};
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    background: ${(props) => props.hoverBackground};
  }
`;
