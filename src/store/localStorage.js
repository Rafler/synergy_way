import {cards} from "../api/data";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return {
                basket: [],
                cards,
            }
        }
        return {
            ...JSON.parse(serializedState),
            cards
        };
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        return undefined;
    }
};
