import {ProductCard} from "./ProductCard.styled";
import {ProductRatingMolecule} from "../../molecules/ProductRating/ProductRating.molecule";
import {IconAtom} from "../../atoms/IconAtom/Icon.atom";

interface ProductCardOrganismProps {
    productName: string;
    productRating: number;
    productImg: string;
    productPrice: number;
    productDiscount: number;

}

export const ProductCardOrganism = (props: ProductCardOrganismProps) => {
    const {productName, productRating, productImg, productPrice, productDiscount} = props;
    return (
        <ProductCard>
            <img className="product-card__img" src={productImg} alt='product picture'/>
            <div className="product-card__content">
                <div>
                    <h4>Lebron James Nike</h4>
                    <ProductRatingMolecule  productRating={productRating}/>
                </div>
                <IconAtom  icon='fa-solid fa-cart-plus' color='white'/>
            </div>
            <div className='product-card__price'>
                <h6 className='product-card__price-change'>$400.000</h6>
                <h4>$100.000</h4>
            </div>
        </ProductCard>
    )
}
