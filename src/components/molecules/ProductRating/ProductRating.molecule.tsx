import {ProductRating} from "./ProductRating.styled";
import {IconAtom} from "../../atoms/IconAtom/Icon.atom";

interface ProductRatingMoleculeProps {
    productRating: number;

}

export const ProductRatingMolecule = (props: ProductRatingMoleculeProps) => {
    const {productRating} = props;
    return (
        <ProductRating>
            <IconAtom  icon='fa-solid fa-star' size='1.2rem'/>
            <IconAtom  icon='fa-solid fa-star' size='1.2rem'/>
            <IconAtom  icon='fa-solid fa-star' size='1.2rem'/>
            <IconAtom  icon='fa-solid fa-star' size='1.2rem'/>
            <IconAtom  icon='fa-solid fa-star-half' size='1.2rem'/>
        </ProductRating>
    )
}
