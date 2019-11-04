import { connect } from "react-redux";
import Basket from "./Basket";
import {addAmount, takeAmount, deleteElement} from "../../store/actionCreators";

const mapDispatch2Props = dispatch => ({
    addAmount: (id) => dispatch(addAmount(id)),
    takeAmount: (id) => dispatch(takeAmount(id)),
    deleteElement: (id) => dispatch(deleteElement(id))
});

function mapState2Props(state) {
    return {
        basket: state.basket,
    };
}

const Enhanced = connect(
    mapState2Props,
    mapDispatch2Props
)(Basket);

export { Enhanced as Basket };
