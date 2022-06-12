import styled from 'styled-components';

export const ProductCard = styled.div `
  padding: 15.2rem 4.6rem 4.6rem 4.6rem;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  background-color: ${props => props.theme.colors.secondary}; 
  gap: 2rem;
  border-radius: 1.8rem;

  .product-card__img {
    position: absolute;
    width: 20rem;
    border-radius: 1.8rem;
    object-fit: cover;
    top: -25%;
    left: -2.5rem;
    right: -2.5rem;
    margin: 0 auto;
  }
  
  .product-card__content {
    width: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  
  .product-card__price {
    width: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
  }
  
  .product-card__price-change {
    text-decoration: line-through;
    color: lightgrey;
  }
`;
