import {Home} from "./Home.styled";
import {ProductListTemplate} from "../../templates/ProductsList/ProductsList.template";

interface HomePageProps {
    styleClass?: string;

}

export const HomePage = (props: HomePageProps) => {

    const {
        styleClass
    } = props;
    return (
        <Home
            className={styleClass}
        >
            <ProductListTemplate />
        </Home>
    );
};
