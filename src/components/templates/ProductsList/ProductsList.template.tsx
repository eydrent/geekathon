import {ProductsList} from "./ProductsList.styled";
import {ProductCardOrganism} from "../../organisms/ProductCardOrganism/ProductCard.organism";

export const ProductListTemplate = () => {
    return (
        <ProductsList>
            <ProductCardOrganism productDiscount={100.000}
                                 productImg={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd9c3592-06f5-4fce-9fca-dee750b70ce3/lebron-19-basketball-shoe-nFCwMM.png'}
                                 productName={'Hola'}
                                 productPrice={200.000} productRating={4.5}/>
            <ProductCardOrganism productDiscount={100.000}
                                 productImg={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd9c3592-06f5-4fce-9fca-dee750b70ce3/lebron-19-basketball-shoe-nFCwMM.png'}
                                 productName={'Hola'}
                                 productPrice={200.000} productRating={4.5}/>
            <ProductCardOrganism productDiscount={100.000}
                                 productImg={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd9c3592-06f5-4fce-9fca-dee750b70ce3/lebron-19-basketball-shoe-nFCwMM.png'}
                                 productName={'Hola'}
                                 productPrice={200.000} productRating={4.5}/>

        </ProductsList>
    )
}
