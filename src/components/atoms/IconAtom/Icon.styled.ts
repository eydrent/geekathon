import styled from 'styled-components';

type IconProps = {
    color?: string;
    size?: string;
};

// @ts-ignore
export const Icon = styled.i<IconProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-size: ${props => props.size};
  color: ${props => props.color};
`;
