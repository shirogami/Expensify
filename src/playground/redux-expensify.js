
import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => {
    return ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt

        }

    });


};

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => {
    return (
        {
            type: 'REMOVE_EXPENSE',
            id: id
        }
    );
}

// EDIT_EXPENSE

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
}

// SET_TEXT_FILTER 

const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    }
}

// SORT_BY_DATE

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

// SORT_BY_AMOUNT

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}
// SET_START_DATE
const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    }
}

// SET_END_DATE

const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate: endDate
    }

}

//EXPENSE_REDUCER

const expenseReducerDefault = [];

const expenseReducer = (state = expenseReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else {
                    return expense;
                }
            });


        default:
            return state;
    }

};

// Filter Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }

};


// Get Visible expense
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());


        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.created < b.created ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}


// Store Creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 10000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 10, createdAt: -1000 }));

// console.log(expenseOne);
// console.log(expenseTwo);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));


// console.log(store.getState()) 

const demoState = {
    expenses: [{
        id: 'jhsdhfdfb',
        description: 'January rent',
        note: 'This was final payment for the address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

