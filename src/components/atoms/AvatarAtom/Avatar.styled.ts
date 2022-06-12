import styled from 'styled-components';

export const Avatar = styled.img`
  width: ${props => props.width};
  height: ${({height}) => height};
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;
