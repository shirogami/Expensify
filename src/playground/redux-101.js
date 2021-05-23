import { createStore } from 'redux';

// Action generators - function that return action Objects

// const add = ({ a, b }, c) => {
//     return a + b + c;
// }

// console.log(add({ a: 1, b: 2 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return (
        {
            type: 'INCREMENT',
            incrementBy: incrementBy
        }
    );
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return (
        {
            type: 'DECREMENT',
            decrementBy: decrementBy

        }
    );
}

const resetCount = () => {
    return (
        {
            type: 'RESET',
            count: 0
        }
    );
}

const setCount = ({ count }) => {
    return (
        {
            type: 'SET',
            count: count
        }
    );
}

// Reducers (Reducers are pure function, required only function parameter)

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;

    }

}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// console.log(store.getState());


// Actions- an object that gets sent to store


// I'd like to increment the count

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// I'd like to decrement the count

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 3
// });

store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(decrementCount());

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(setCount({ count: 101 }))


// unsubscribe() is used to not pass store.subscribe function 
// unsubscribe();

// I'd like to reset the count
// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount())



