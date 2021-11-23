import React, { useReducer } from 'react';
import './Count.css'

const countState = {
    count: 0,
    clicks: 0,
    active: true

};

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
            break;
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
            break;
    }
}
const Count = () => {
    const [state, dispatch] = useReducer(countReducer, countState);
    return (
        <div className="count-body">
            <h1> Count: {state.count}</h1>
            <button className="btn-body" onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
            <button className="btn-body" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        </div>
    );
};

export default Count;