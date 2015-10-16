import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export default function counter(state = 1, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            console.log("reducer cought", state);
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}
