import { connect } from "react-redux";
import Catalog from "./Catalog";
import {addToBasket} from "../../store/actionCreators";

const mapDispatch2Props = dispatch => ({
    addToBasket: (card) => dispatch(addToBasket(card)),
});

function mapState2Props(state) {
    return {
        cards: state.cards,
        basket: state.basket,
    };
}
const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props
)(Catalog);

export { Enhanced as Catalog };
